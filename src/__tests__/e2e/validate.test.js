import fs from "fs";

import traverse from "../../traverse";
import { validateFromFile } from "../../validate";

describe("Traverse files", () => {
  test("syntetic/syntetic-1.yaml", () => {
    expect(
      validateFromFile("./definitions/syntetic/syntetic-1.yaml", {})
    ).toMatchInlineSnapshot(`Array []`);
  });

  test("openapi-directory/rebilly-full.yaml", () => {
    expect(
      validateFromFile("./definitions/openapi-directory/rebilly-full.yaml", {})
    ).toMatchInlineSnapshot(`Array []`);
  });

  test("openapi-directory/trello.yaml", () => {
    expect(validateFromFile("./definitions/openapi-directory/trello.yaml", {}))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "codeFrame": "[90m14633| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14634|   in: query[39m
      [90m14635|   [4m[31mname: token[0m[24m[39m
      [90m14636|   required: true[39m
      [90m14637|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 493103,
            "endLine": 14635,
            "startCol": 11,
            "startIndex": 493092,
            "startLine": 14635,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}",
            "get",
            "parameters",
            4,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14588| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14589|   in: query[39m
      [90m14590|   [4m[31mname: token[0m[24m[39m
      [90m14591|   required: true[39m
      [90m14592|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 491742,
            "endLine": 14590,
            "startCol": 11,
            "startIndex": 491731,
            "startLine": 14590,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}",
            "delete",
            "parameters",
            2,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14673| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14674|   in: query[39m
      [90m14675|   [4m[31mname: token[0m[24m[39m
      [90m14676|   required: true[39m
      [90m14677|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 494577,
            "endLine": 14675,
            "startCol": 11,
            "startIndex": 494566,
            "startLine": 14675,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/member",
            "get",
            "parameters",
            3,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14712| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14713|   in: query[39m
      [90m14714|   [4m[31mname: token[0m[24m[39m
      [90m14715|   required: true[39m
      [90m14716|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 495716,
            "endLine": 14714,
            "startCol": 11,
            "startIndex": 495705,
            "startLine": 14714,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/member/{field}",
            "get",
            "parameters",
            3,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14745| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14746|   in: query[39m
      [90m14747|   [4m[31mname: token[0m[24m[39m
      [90m14748|   required: true[39m
      [90m14749|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 496713,
            "endLine": 14747,
            "startCol": 11,
            "startIndex": 496702,
            "startLine": 14747,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/webhooks",
            "get",
            "parameters",
            2,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14816| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14817|   in: query[39m
      [90m14818|   [4m[31mname: token[0m[24m[39m
      [90m14819|   required: true[39m
      [90m14820|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 498873,
            "endLine": 14818,
            "startCol": 11,
            "startIndex": 498862,
            "startLine": 14818,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/webhooks",
            "put",
            "parameters",
            2,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14777| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14778|   in: query[39m
      [90m14779|   [4m[31mname: token[0m[24m[39m
      [90m14780|   required: true[39m
      [90m14781|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 497676,
            "endLine": 14779,
            "startCol": 11,
            "startIndex": 497665,
            "startLine": 14779,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/webhooks",
            "post",
            "parameters",
            2,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14900| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14901|   in: query[39m
      [90m14902|   [4m[31mname: token[0m[24m[39m
      [90m14903|   required: true[39m
      [90m14904|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 501410,
            "endLine": 14902,
            "startCol": 11,
            "startIndex": 501399,
            "startLine": 14902,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/webhooks/{idWebhook}",
            "get",
            "parameters",
            3,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14862| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14863|   in: query[39m
      [90m14864|   [4m[31mname: token[0m[24m[39m
      [90m14865|   required: true[39m
      [90m14866|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 500277,
            "endLine": 14864,
            "startCol": 11,
            "startIndex": 500266,
            "startLine": 14864,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/webhooks/{idWebhook}",
            "delete",
            "parameters",
            3,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
        Object {
          "codeFrame": "[90m14939| - description: '<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>'[39m
      [90m14940|   in: query[39m
      [90m14941|   [4m[31mname: token[0m[24m[39m
      [90m14942|   required: true[39m
      [90m14943|   schema:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/trello.yaml",
          "fromRule": "unique-parameter-names",
          "location": Object {
            "endCol": 21,
            "endIndex": 502549,
            "endLine": 14941,
            "startCol": 11,
            "startIndex": 502538,
            "startLine": 14941,
          },
          "message": "Duplicate parameters are not allowed. This name already used on higher or same level.",
          "path": Array [
            "paths",
            "/tokens/{token}/{field}",
            "get",
            "parameters",
            3,
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "<a href=\\"https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user\\"  target=\\"_blank\\">Getting a token from a user</a>",
            "in": "query",
            "name": "token",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        },
      ]
    `);
  });

  test("openapi3-examples/uber.yaml", () => {
    expect(validateFromFile("./definitions/openapi3-examples/uber.yaml", {}))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "codeFrame": "[90m02| # as a demonstration of an API spec in YAML[39m
      [90m03| openapi: \\"3.0.0\\"[39m
      [90m04| [4m[31minfo:[39m
      [90m05|[39m[31m   title: Uber API[0m
      [90m06|[39m[31m   description: Move your app forward with the Uber API[0m
      [90m07|[39m[31m   version: \\"1.0.0\\"[0m[24m[0m
      [90m08| servers:[39m
      [90m09|   - url: https://api.uber.com/v1[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi3-examples/uber.yaml",
          "fromRule": "license-required",
          "location": Object {
            "endCol": 18,
            "endIndex": 195,
            "endLine": 7,
            "startCol": 1,
            "startIndex": 98,
            "startLine": 4,
          },
          "message": "The field 'license' must be present on this level.",
          "path": Array [
            "info",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "Move your app forward with the Uber API",
            "title": "Uber API",
            "version": "1.0.0",
          },
        },
      ]
    `);
  });

  test("syntetic/to_bundle/main.yaml", () => {
    expect(validateFromFile("./definitions/syntetic/to_bundle/main.yaml", {}))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "codeFrame": "[90m09|       type: string[39m
      [90m10|     noRef:[39m
      [90m11|       [4m[31m$ref: 'bad.yaml#/does/not/exist'[0m[24m[39m",
          "enableCodeframe": true,
          "file": "definitions/syntetic/to_bundle/components/parameters/parameter.name.yml",
          "fromRule": "resolve-ref",
          "location": Object {
            "endCol": 39,
            "endIndex": 182,
            "endLine": 11,
            "startCol": 7,
            "startIndex": 150,
            "startLine": 11,
          },
          "message": "Reference does not exist.",
          "path": Array [
            "schema",
            "properties",
            "noRef",
            "$ref",
          ],
          "pathStack": Array [
            Object {
              "file": "definitions/syntetic/to_bundle/main.yaml",
              "path": Array [
                "paths",
                "/api",
                "get",
              ],
              "startLine": 12,
            },
            Object {
              "file": "definitions/syntetic/to_bundle/operations/api/api-get.yaml",
              "path": Array [
                "parameters",
                0,
              ],
              "startLine": 2,
            },
          ],
          "possibleAlternate": null,
          "severity": 4,
          "target": undefined,
          "value": Object {
            "$ref": "bad.yaml#/does/not/exist",
          },
        },
      ]
    `);
  });
});
