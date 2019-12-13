class OperationIdUnique {
  static get rule() {
    return 'operation-operationId-unique';
  }

  constructor() {
    this.operationIds = {};
  }

  OpenAPIOperation() {
    return {
      onEnter: (node, definition, ctx) => {
        if (node.operationId) {
          if (this.operationIds[node.operationId]) {
            this.operationIds[node.operationId] += 1;
            return [ctx.createError('The "operationId" fields must be unique.', 'value')];
          }
          this.operationIds[node.operationId] = 1;
        }
        return null;
      },
    };
  }
}

module.exports = OperationIdUnique;
