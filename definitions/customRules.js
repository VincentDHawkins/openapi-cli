/* eslint-disable max-classes-per-file */
class OverlaysMerger {
  static get rule() {
    return 'overlaysMerger';
  }

  OpenAPIRoot() {
    return {
      onEnter: (node) => {
        this.context = node['x-redocly-context'];
      },
    };
  }

  any() {
    return {
      onEnter: (node) => {
        if (node['x-redocly-overlay']) {
          Object.keys(node['x-redocly-overlay'][this.context.version]).forEach((k) => {
            node[k] = node['x-redocly-overlay'][this.context.version][k];
          });

          delete node['x-redocly-overlay'];
        }
      },
    };
  }
}

class MergeChecker {
  static get rule() {
    return 'mergeChecker';
  }

  OpenAPIInfo() {
    return {
      onEnter: (node) => {
        console.log(node);
      },
    };
  }
}

module.exports = [
  OverlaysMerger, MergeChecker,
];
