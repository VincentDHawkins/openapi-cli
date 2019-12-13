/* eslint-disable no-underscore-dangle */
import path from 'path';
import fs from 'fs';

const DEFAULT_EXECUTION_ORDER = process.env.DEFAULT_EXECUTION_ORDER || 'late';

const get = (p, o) => p.reduce((xs, x) => ((xs && xs[x]) ? xs[x] : null), o);

function getRuleConfig(config, ruleName) {
  const value = get(ruleName.split('.'), config);
  switch (typeof value) {
    case 'string':
      return {
        level: value,
        executionOrder: DEFAULT_EXECUTION_ORDER,
      };
    case 'object':
    default:
      return {
        level: 4,
        executionOrder: DEFAULT_EXECUTION_ORDER,
        ...value,
      };
  }
}

function loadRuleset(config) {
  const ruleSet = [];
  const allRules = [];

  const configCopy = {
    ...config,
    rulesPath: config.rulesPath ? config.rulesPath : `${__dirname}/../visitors`,
  };
  let rulesDirectory = path.resolve(configCopy.rulesPath);
  if (!fs.existsSync(rulesDirectory)) {
    rulesDirectory = `${__dirname}/../visitors`;
  }
  const ruleSetDirContents = fs.readdirSync(rulesDirectory)
    .map((fName) => `${rulesDirectory}/${fName}`);
  const files = ruleSetDirContents.filter((fName) => fs.lstatSync(fName).isFile());

  const dirs = ruleSetDirContents
    .filter((fName) => !fs.lstatSync(fName).isFile() && fName.indexOf('utils') === -1);

  files.forEach((file) => {
    const Rule = require(file);
    const ruleConfig = getRuleConfig(configCopy.rules, Rule.rule);

    const ruleInstance = new Rule(ruleConfig);
    if (ruleConfig.level !== 'off') {
      if (!ruleInstance.config) {
        ruleInstance.config = ruleConfig;
      }
      ruleInstance._config = ruleConfig;
      ruleSet.push(ruleInstance);
    }
    allRules.push(ruleInstance);
  });

  dirs.forEach((dir) => {
    const [nestedRules, allNestedRules] = loadRuleset({
      ...configCopy,
      rulesPath: dir,
    });
    ruleSet.push(...nestedRules);
    allRules.push(...allNestedRules);
  });

  return [ruleSet, allRules];
}

export function loadRulesetExtension(config, rulesetName) {
  const additionalRules = [];

  const configCopy = {
    ...config,
    rulesPath: config.rulesPath ? config.rulesPath : `${__dirname}/../visitors`,
  };

  config.rulesExtensions.forEach((Rule) => {
    const ruleConfig = getRuleConfig(configCopy.rules, Rule.rule);
    ruleConfig.executionOrder = ruleConfig.executionOrder === 'default' ? DEFAULT_EXECUTION_ORDER : ruleConfig.executionOrder;

    let shouldLoad = ruleConfig.level !== 'off';

    switch (rulesetName) {
      case 'early':
        shouldLoad = shouldLoad && (ruleConfig.executionOrder === 'early' || ruleConfig.executionOrder === 'both');
        break;
      case 'late':
        shouldLoad = shouldLoad && (ruleConfig.executionOrder === 'late' || ruleConfig.executionOrder === 'both');
        break;
      default:
        return;
    }

    if (shouldLoad) {
      const ruleInstance = new Rule(ruleConfig);
      if (!ruleInstance.config) {
        ruleInstance.config = ruleConfig;
      }
      ruleInstance._config = ruleConfig;
      additionalRules.push(ruleInstance);
    }
  });
  return additionalRules;
}

export default loadRuleset;
