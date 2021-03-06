/* eslint-disable no-underscore-dangle */

class StringMatcher {
  static get rule() {
    return 'string-matcher';
  }

  constructor(config) {
    this.ruleSets = {};

    for (const ruleName of Object.keys(config.rules || {})) {
      if (!config.rules[ruleName].on) {
        process.stdout.write(`Missing "on" field on the ${ruleName} subrule of string-matcher. Aborting validation`);
        process.exit(1);
      }

      const [typeName, field] = config.rules[ruleName].on.split('.');
      const rule = {
        not: false,
        ...config.rules[ruleName],
        typeName,
        field,
        name: ruleName,
      };

      const regexp = (!!rule.regexp && new RegExp(rule.regexp)) || null;

      const startsWithHelper = (node, ctx, expr, inverse) => {
        if (!node[rule.field]) {
          return ctx.createError(`Missing ${rule.field} property required by ${rule.name} rule.`, 'key', undefined, rule.level);
        }

        if ((!inverse && node[rule.field].startsWith(expr)) || (inverse && !node[rule.field].startsWith(expr))) return null;

        ctx.path.push(rule.field);
        const error = ctx.createError(rule.message
            || `Field ${rule.field} does not starts with: ${expr}. Error was generated by ${rule.name} validation rule.`,
        'value', undefined, rule.level);
        ctx.path.pop();
        return error;
      };

      const endsWithHelper = (node, ctx, expr, inverse) => {
        if (!node[rule.field]) {
          return ctx.createError(`Missing ${rule.field} property required by ${rule.name} rule.`, 'key', undefined, rule.level);
        }

        if ((!inverse && node[rule.field].endsWith(expr)) || (inverse && !node[rule.field].endsWith(expr))) return null;

        ctx.path.push(rule.field);
        const error = ctx.createError(rule.message
            || `Field ${rule.field} does not ends with: ${expr}. Error was generated by ${rule.name} validation rule.`,
        'value', undefined, rule.level);
        ctx.path.pop();
        return error;
      };

      const checkForRegexp = (node, ctx, expr, inverse) => {
        if ((!inverse && !node[rule.field].match(expr)) || (inverse && node[rule.field].match(expr))) {
          ctx.path.push(rule.field);
          const error = ctx.createError(rule.message
            || `Field ${rule.field} does not match regexp: ${expr}. Error was generated by ${rule.name} validation rule.`,
          'value', undefined, rule.level);
          ctx.path.pop();
          return error;
        }
        return null;
      };

      const validateRule = (node, ctx) => {
        let error = null;
        if (regexp) {
          error = error || checkForRegexp(node, ctx, regexp, rule.not);
        }
        if (rule.startsWith) {
          error = error || startsWithHelper(node, ctx, rule.startsWith, rule.not);
        }
        if (rule.endsWith) {
          error = error || endsWithHelper(node, ctx, rule.endsWith, rule.not);
        }

        return error;
      };

      rule.validate = validateRule;

      if (!this.ruleSets[rule.typeName]) {
        this.ruleSets[rule.typeName] = [];
      }

      this.ruleSets[rule.typeName].push(rule);
    }
  }

  any() {
    return {
      onExit: (node, definition, ctx) => {
        if (!this.ruleSets[definition.name]) return [];
        const errors = [];
        for (const rule of this.ruleSets[definition.name]) {
          const validationResult = rule.validate(node, ctx);
          if (validationResult) errors.push(validationResult);
        }
        return errors;
      },
    };
  }
}

module.exports = StringMatcher;
