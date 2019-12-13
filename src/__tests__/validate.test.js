import fs from "fs";

import traverse from "../traverse";
import { validateFromFile } from "../validate";

describe("Traverse files", () => {
  test("syntetic/syntetic-1.yaml", () => {
    expect(
      validateFromFile("./definitions/syntetic/syntetic-1.yaml", {
        rulesRedefine: "./definitions/rulesRedefine.js",
        typeExtension: "./definitions/typeExtension.js"
      })
    ).toMatchInlineSnapshot(`
      Array [
        Object {
          "codeFrame": "[90m44| externalDocs:[39m
      [90m45|   description: asdasd[39m
      [90m46|   [4m[31murl: googlecom[90m[24m[39m
      [90m47| components:[39m
      [90m48|   securitySchemes:[39m",
          "enableCodeframe": true,
          "file": "definitions/syntetic/syntetic-1.yaml",
          "fromRule": "oas3-schema/external-docs",
          "location": Object {
            "endCol": 16,
            "endIndex": 940,
            "endLine": 46,
            "startCol": 3,
            "startIndex": 926,
            "startLine": 46,
          },
          "message": "url must be a valid URL",
          "path": Array [
            "externalDocs",
            "url",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "asdasd",
            "url": "googlecom",
          },
        },
      ]
    `);
  });

  test("syntetic/syntetic-1.yaml", () => {
    expect(
      validateFromFile("./definitions/openapi-directory/rebilly-full.yaml", {})
    ).toMatchInlineSnapshot(`Array []`);
  });

  test("syntetic/syntetic-1.yaml", () => {
    expect(
      validateFromFile("./definitions/syntetic/to_bundle/main.yaml", {})
    ).toMatchInlineSnapshot(`Array []`);
  });

  test("syntetic/syntetic-1.yaml", () => {
    expect(validateFromFile("./definitions/syntetic/syntetic-1.yaml", {}))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "codeFrame": "[90m57|       bearerFormat: JWT[39m
      [90m58|   parameters:[39m
      [90m59|     [4m[31mexample[90m[24m:[39m
      [90m60|       allOf:[39m
      [90m61|         - name: bla[39m",
          "enableCodeframe": true,
          "file": "definitions/syntetic/syntetic-1.yaml",
          "fromRule": "oas3-schema/parameter",
          "location": Object {
            "endCol": 12,
            "endIndex": 1292,
            "endLine": 59,
            "startCol": 5,
            "startIndex": 1285,
            "startLine": 59,
          },
          "message": "The field 'name' must be present on this level.",
          "path": Array [
            "components",
            "parameters",
            "example",
            "name",
          ],
          "pathStack": Array [
            Object {
              "file": "definitions/syntetic/syntetic-1.yaml",
              "path": Array [
                "paths",
                "user",
                "parameters",
                0,
              ],
              "startLine": 22,
            },
          ],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "key",
          "value": Object {
            "allOf": Array [
              Object {
                "in": "query",
                "name": "bla",
                "required": false,
                "schema": Object {
                  "type": "string",
                },
              },
              Object {
                "description": "blo",
              },
              Object {
                "description": "bla",
              },
            ],
          },
        },
        Object {
          "codeFrame": "[90m57|       bearerFormat: JWT[39m
      [90m58|   parameters:[39m
      [90m59|     [4m[31mexample[90m[24m:[39m
      [90m60|       allOf:[39m
      [90m61|         - name: bla[39m",
          "enableCodeframe": true,
          "file": "definitions/syntetic/syntetic-1.yaml",
          "fromRule": "oas3-schema/parameter",
          "location": Object {
            "endCol": 12,
            "endIndex": 1292,
            "endLine": 59,
            "startCol": 5,
            "startIndex": 1285,
            "startLine": 59,
          },
          "message": "The field 'in' must be present on this level.",
          "path": Array [
            "components",
            "parameters",
            "example",
            "in",
          ],
          "pathStack": Array [
            Object {
              "file": "definitions/syntetic/syntetic-1.yaml",
              "path": Array [
                "paths",
                "user",
                "parameters",
                0,
              ],
              "startLine": 22,
            },
          ],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "key",
          "value": Object {
            "allOf": Array [
              Object {
                "in": "query",
                "name": "bla",
                "required": false,
                "schema": Object {
                  "type": "string",
                },
              },
              Object {
                "description": "blo",
              },
              Object {
                "description": "bla",
              },
            ],
          },
        },
        Object {
          "codeFrame": "[90m57|       bearerFormat: JWT[39m
      [90m58|   parameters:[39m
      [90m59|     [4m[31mexample[90m[24m:[39m
      [90m60|       allOf:[39m
      [90m61|         - name: bla[39m",
          "enableCodeframe": true,
          "file": "definitions/syntetic/syntetic-1.yaml",
          "fromRule": "oas3-schema/parameter",
          "location": Object {
            "endCol": 12,
            "endIndex": 1292,
            "endLine": 59,
            "startCol": 5,
            "startIndex": 1285,
            "startLine": 59,
          },
          "message": "The field 'name' must be present on this level.",
          "path": Array [
            "components",
            "parameters",
            "example",
            "name",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "key",
          "value": Object {
            "allOf": Array [
              Object {
                "in": "query",
                "name": "bla",
                "required": false,
                "schema": Object {
                  "type": "string",
                },
              },
              Object {
                "description": "blo",
              },
              Object {
                "description": "bla",
              },
            ],
          },
        },
        Object {
          "codeFrame": "[90m57|       bearerFormat: JWT[39m
      [90m58|   parameters:[39m
      [90m59|     [4m[31mexample[90m[24m:[39m
      [90m60|       allOf:[39m
      [90m61|         - name: bla[39m",
          "enableCodeframe": true,
          "file": "definitions/syntetic/syntetic-1.yaml",
          "fromRule": "oas3-schema/parameter",
          "location": Object {
            "endCol": 12,
            "endIndex": 1292,
            "endLine": 59,
            "startCol": 5,
            "startIndex": 1285,
            "startLine": 59,
          },
          "message": "The field 'in' must be present on this level.",
          "path": Array [
            "components",
            "parameters",
            "example",
            "in",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "key",
          "value": Object {
            "allOf": Array [
              Object {
                "in": "query",
                "name": "bla",
                "required": false,
                "schema": Object {
                  "type": "string",
                },
              },
              Object {
                "description": "blo",
              },
              Object {
                "description": "bla",
              },
            ],
          },
        },
        Object {
          "codeFrame": "[90m44| externalDocs:[39m
      [90m45|   description: asdasd[39m
      [90m46|   [4m[31murl: googlecom[90m[24m[39m
      [90m47| components:[39m
      [90m48|   securitySchemes:[39m",
          "enableCodeframe": true,
          "file": "definitions/syntetic/syntetic-1.yaml",
          "fromRule": "oas3-schema/external-docs",
          "location": Object {
            "endCol": 16,
            "endIndex": 940,
            "endLine": 46,
            "startCol": 3,
            "startIndex": 926,
            "startLine": 46,
          },
          "message": "url must be a valid URL",
          "path": Array [
            "externalDocs",
            "url",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "value",
          "value": Object {
            "description": "asdasd",
            "url": "googlecom",
          },
        },
      ]
    `);
  });
});
