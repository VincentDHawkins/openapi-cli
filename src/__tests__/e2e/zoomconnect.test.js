import fs from "fs";

import { validateFromFile } from "../../validate";

describe("Zoomconnect", () => {
  test("./definitions/openapi-directory/zoomconnect.yaml", () => {
    expect(
      validateFromFile("./definitions/openapi-directory/zoomconnect.yaml", {})
    ).toMatchInlineSnapshot(`
      Array [
        Object {
          "codeFrame": "[90m02| servers:[39m
      [90m03|   - url: 'https://www.zoomconnect.com/app'[39m
      [90m04| [4m[31minfo:[39m
      [90m05|[39m[31m   description: The world's greatest SMS API[0m
      [90m06|[39m[31m   title: Zoom Connect[0m
      [90m07|[39m[31m   version: '1'[0m
      [90m08|[39m[31m   x-apisguru-categories:[0m
      [90m09|[39m[31m     - messaging[0m
      [90m10|[39m[31m     - marketing[0m
      [90m11|[39m[31m   x-logo:[0m
      [90m12|[39m[31m     url: 'http://zoomconnect.com/assets/logo.png'[0m
      [90m13|[39m[31m   x-origin:[0m
      [90m14|[39m[31m     - converter:[0m
      [90m15|[39m[31m         url: 'https://github.com/lucybot/api-spec-converter'[0m
      [90m16|[39m[31m         version: 2.0.1[0m
      [90m17|[39m[31m       format: swagger[0m
      [90m18|[39m[31m       url: 'https://www.zoomconnect.com/zoom/api-docs'[0m
      [90m19|[39m[31m       version: '1.2'[0m
      [90m20|[39m[31m   x-providerName: zoomconnect.com[0m
      [90m21|[39m[31m   x-tags:[0m
      [90m22|[39m[31m     - SMS[0m
      [90m23|[39m[31m     - bulk SMS[0m
      [90m24| [0m[24mtags:[39m
      [90m25|   - description: Core information related to your account[39m
      [90m26|     name: account[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/zoomconnect.yaml",
          "fromRule": "license-required",
          "location": Object {
            "endCol": 1,
            "endIndex": 551,
            "endLine": 24,
            "startCol": 1,
            "startIndex": 67,
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
            "description": "The world's greatest SMS API",
            "title": "Zoom Connect",
            "version": "1",
            "x-apisguru-categories": Array [
              "messaging",
              "marketing",
            ],
            "x-logo": Object {
              "url": "http://zoomconnect.com/assets/logo.png",
            },
            "x-origin": Array [
              Object {
                "converter": Object {
                  "url": "https://github.com/lucybot/api-spec-converter",
                  "version": "2.0.1",
                },
                "format": "swagger",
                "url": "https://www.zoomconnect.com/zoom/api-docs",
                "version": "1.2",
              },
            ],
            "x-providerName": "zoomconnect.com",
            "x-tags": Array [
              "SMS",
              "bulk SMS",
            ],
          },
        },
        Object {
          "codeFrame": "[90m1552|         status:[39m
      [90m1553|           type: string[39m
      [90m1554|     [4m[31mVoid[0m[24m: {}[39m
      [90m1555|     WebServiceAccount:[39m
      [90m1556|       description: WebServiceAccount[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/zoomconnect.yaml",
          "fromRule": "no-unused-schemas",
          "location": Object {
            "endCol": 9,
            "endIndex": 42550,
            "endLine": 1554,
            "startCol": 5,
            "startIndex": 42546,
            "startLine": 1554,
          },
          "message": "The schema \\"Void\\" is never used.",
          "path": Array [
            "components",
            "schemas",
            "Void",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "key",
          "value": Object {
            "components": Object {
              "requestBodies": Object {
                "Body": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  },
                  "description": "number",
                },
                "WebServiceContact": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceContact",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceContact",
                      },
                    },
                  },
                  "description": "webServiceContact",
                },
                "WebServiceGroup": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceGroup",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceGroup",
                      },
                    },
                  },
                  "description": "webServiceGroup",
                },
                "WebServiceUser": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceUser",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceUser",
                      },
                    },
                  },
                  "description": "request",
                },
              },
              "schemas": Object {
                "Link": Object {
                  "properties": Object {
                    "href": Object {
                      "type": "string",
                    },
                    "rel": Object {
                      "type": "string",
                    },
                    "templated": Object {
                      "type": "boolean",
                    },
                  },
                },
                "RestErrorDTO": Object {
                  "description": "RestErrorDTO",
                  "properties": Object {
                    "code": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "developerMessage": Object {
                      "type": "string",
                    },
                    "message": Object {
                      "type": "string",
                    },
                    "moreInfoUrl": Object {
                      "type": "string",
                    },
                    "status": Object {
                      "type": "string",
                    },
                  },
                },
                "Void": Object {},
                "WebServiceAccount": Object {
                  "description": "WebServiceAccount",
                  "properties": Object {
                    "creditBalance": Object {
                      "format": "double",
                      "type": "number",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceContact": Object {
                  "description": "WebServiceContact",
                  "properties": Object {
                    "contactId": Object {
                      "type": "string",
                    },
                    "contactNumber": Object {
                      "type": "string",
                    },
                    "firstName": Object {
                      "type": "string",
                    },
                    "lastName": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "title": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceContactLink": Object {
                  "description": "WebServiceContactLink",
                  "properties": Object {
                    "contactId": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceContacts": Object {
                  "description": "WebServiceContacts",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "webServiceContacts": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceContact",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceGroup": Object {
                  "description": "WebServiceGroup",
                  "properties": Object {
                    "groupId": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "name": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceGroups": Object {
                  "description": "WebServiceGroups",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "webServiceGroups": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceGroup",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceMessage": Object {
                  "description": "WebServiceMessage",
                  "properties": Object {
                    "campaign": Object {
                      "type": "string",
                    },
                    "contact": Object {
                      "$ref": "#/components/schemas/WebServiceContactLink",
                    },
                    "creditCost": Object {
                      "format": "double",
                      "type": "number",
                    },
                    "dateTimeReceived": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "dateTimeScheduled": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "dateTimeSent": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "deleted": Object {
                      "type": "boolean",
                    },
                    "fromNumber": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "message": Object {
                      "type": "string",
                    },
                    "messageId": Object {
                      "type": "string",
                    },
                    "messageStatus": Object {
                      "type": "string",
                    },
                    "messageType": Object {
                      "type": "string",
                    },
                    "numberOfMessages": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "read": Object {
                      "type": "boolean",
                    },
                    "toNumber": Object {
                      "type": "string",
                    },
                    "userDataField": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceMessages": Object {
                  "description": "WebServiceMessages",
                  "properties": Object {
                    "elements": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "page": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "pageSize": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "totalElements": Object {
                      "format": "int64",
                      "type": "integer",
                    },
                    "totalPages": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "webServiceMessages": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceMessage",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceNumberContextLookupRequest": Object {
                  "description": "WebServiceNumberContextLookupRequest",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "numbers": Object {
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceNumberContextLookupResponse": Object {
                  "description": "WebServiceNumberContextLookupResponse",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "number": Object {
                      "type": "string",
                    },
                    "numberValid": Object {
                      "type": "boolean",
                    },
                  },
                },
                "WebServiceSendSmsRequest": Object {
                  "description": "WebServiceSendSmsRequest",
                  "properties": Object {
                    "campaign": Object {
                      "type": "string",
                    },
                    "dataField": Object {
                      "type": "string",
                    },
                    "dateToSend": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "message": Object {
                      "type": "string",
                    },
                    "recipientNumber": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceSendSmsRequests": Object {
                  "description": "WebServiceSendSmsRequests",
                  "properties": Object {
                    "defaultDateToSend": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "messagesPerMinute": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "sendSmsRequests": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceSendSmsResponse": Object {
                  "description": "WebServiceSendSmsResponse",
                  "properties": Object {
                    "error": Object {
                      "type": "string",
                    },
                    "messageId": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceSendSmsResponses": Object {
                  "description": "WebServiceSendSmsResponses",
                  "properties": Object {
                    "sendSmsResponses": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceSendSmsResponse",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceTemplate": Object {
                  "description": "WebServiceTemplate",
                  "properties": Object {
                    "data": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "name": Object {
                      "type": "string",
                    },
                    "templateId": Object {
                      "format": "int64",
                      "type": "integer",
                    },
                  },
                },
                "WebServiceTemplates": Object {
                  "description": "WebServiceTemplates",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "webServiceTemplates": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceTemplate",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceTransferCreditsRequest": Object {
                  "description": "WebServiceTransferCreditsRequest",
                  "properties": Object {
                    "numberOfCreditsToTransfer": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "transferFromEmailAddress": Object {
                      "type": "string",
                    },
                    "transferToEmailAddress": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceUser": Object {
                  "description": "WebServiceUser",
                  "properties": Object {
                    "company": Object {
                      "type": "string",
                    },
                    "contactNumber": Object {
                      "type": "string",
                    },
                    "creditBalance": Object {
                      "format": "double",
                      "type": "number",
                    },
                    "emailAddress": Object {
                      "type": "string",
                    },
                    "firstName": Object {
                      "type": "string",
                    },
                    "lastName": Object {
                      "type": "string",
                    },
                    "password": Object {
                      "type": "string",
                    },
                    "userId": Object {
                      "format": "int64",
                      "type": "integer",
                    },
                  },
                },
                "WebServiceUsers": Object {
                  "description": "WebServiceUsers",
                  "properties": Object {
                    "webServiceUserList": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceUser",
                      },
                      "type": "array",
                    },
                  },
                },
              },
              "securitySchemes": Object {
                "email": Object {
                  "in": "header",
                  "name": "email",
                  "type": "apiKey",
                },
                "token": Object {
                  "in": "header",
                  "name": "token",
                  "type": "apiKey",
                },
              },
            },
            "info": Object {
              "description": "The world's greatest SMS API",
              "title": "Zoom Connect",
              "version": "1",
              "x-apisguru-categories": Array [
                "messaging",
                "marketing",
              ],
              "x-logo": Object {
                "url": "http://zoomconnect.com/assets/logo.png",
              },
              "x-origin": Array [
                Object {
                  "converter": Object {
                    "url": "https://github.com/lucybot/api-spec-converter",
                    "version": "2.0.1",
                  },
                  "format": "swagger",
                  "url": "https://www.zoomconnect.com/zoom/api-docs",
                  "version": "1.2",
                },
              ],
              "x-providerName": "zoomconnect.com",
              "x-tags": Array [
                "SMS",
                "bulk SMS",
              ],
            },
            "openapi": "3.0.0",
            "paths": Object {
              "/api/rest/v1/account/balance": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns your account's credit balance",
                  "operationId": "getBalance",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceAccount",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceAccount",
                          },
                        },
                      },
                      "description": "Success",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "balance",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/account/transfer": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Transfers credits between two users in the same team. The <i>account email address</i> fields as well as the <i>number of credits to transfer</i> are required. ",
                  "operationId": "transfer",
                  "requestBody": Object {
                    "content": Object {
                      "application/json": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceTransferCreditsRequest",
                        },
                      },
                      "application/xml": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceTransferCreditsRequest",
                        },
                      },
                    },
                    "description": "request",
                  },
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "transfer",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/account/user": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Find a user for a particular email address",
                  "operationId": "search",
                  "parameters": Array [
                    Object {
                      "description": "search by email address",
                      "in": "query",
                      "name": "searchEmail",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUsers",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUsers",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "search",
                  "tags": Array [
                    "account",
                  ],
                },
                "put": Object {
                  "deprecated": false,
                  "description": "Creates a new sub-account in your team. The following fields are required <i>firstname, lastname, email address, contact number</i> and <i>password.</i>",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceUser",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "create",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/account/user/{userId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Gets a user from a given user id",
                  "operationId": "getUser",
                  "parameters": Array [
                    Object {
                      "description": "userId",
                      "in": "path",
                      "name": "userId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "getUser",
                  "tags": Array [
                    "account",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Updates a sub-account in your team. The following fields can be updated <i>firstname, lastname, contact number</i> and <i>password.</i>",
                  "parameters": Array [
                    Object {
                      "description": "userId",
                      "in": "path",
                      "name": "userId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceUser",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "update",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/contacts/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all contacts",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContacts",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContacts",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/create": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Creates a  contact",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceContact",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "No response was specified",
                    },
                    "201": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "create",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/{contactId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  contact",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single contact",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Updates a  contact",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceContact",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "update",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/{contactId}/addFromGroup/{groupId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeFromGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeFromGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/{contactId}/addToGroup/{groupId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addToGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addToGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/context/lookup": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns context information for a single provided",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/Body",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                      },
                      "description": "Success",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "lookup",
                  "tags": Array [
                    "context",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Returns context information for a single provided",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/Body",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                      },
                      "description": "Success",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "lookup",
                  "tags": Array [
                    "context",
                  ],
                },
              },
              "/api/rest/v1/groups/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all groups",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroups",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroups",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/create": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Create a  group",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceGroup",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "No response was specified",
                    },
                    "201": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "create",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/{groupId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "groups",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "groups",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Update a  group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceGroup",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "update",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/{groupId}/addContact/{contactId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addContact",
                  "tags": Array [
                    "groups",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addContact",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/{groupId}/removeContact/{contactId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeContact",
                  "tags": Array [
                    "groups",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeContact",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/messages/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all messages",
                  "parameters": Array [
                    Object {
                      "description": "number of elements to return at a time",
                      "in": "query",
                      "name": "pageSize",
                      "required": false,
                      "schema": Object {
                        "default": 100,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    Object {
                      "description": "page number",
                      "in": "query",
                      "name": "page",
                      "required": false,
                      "schema": Object {
                        "default": 1,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    Object {
                      "description": "filter by message type",
                      "in": "query",
                      "name": "type",
                      "required": false,
                      "schema": Object {
                        "enum": Array [
                          "OUTBOUND",
                          "INBOUND",
                        ],
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "filter by message status",
                      "in": "query",
                      "name": "status",
                      "required": false,
                      "schema": Object {
                        "enum": Array [
                          "SCHEDULED",
                          "UNKNOWN",
                          "SENT",
                          "FAILED",
                          "FAILED_REFUNDED",
                          "FAILED_OPTOUT",
                          "DELIVERED",
                          "RECEIVED",
                        ],
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "fromDateTimeSent",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "toDateTimeSent",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "fromDateTimeReceived",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "toDateTimeReceived",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "phone number the message was sent from",
                      "in": "query",
                      "name": "fromNumber",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "phone number the message was sent to",
                      "in": "query",
                      "name": "toNumber",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "search matching message text",
                      "in": "query",
                      "name": "message",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "search by campaign",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "search by data field",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "return only deleted / not deleted messages",
                      "in": "query",
                      "name": "deleted",
                      "required": false,
                      "schema": Object {
                        "type": "boolean",
                      },
                    },
                    Object {
                      "description": "return only read / unread messages (inbox messages only)",
                      "in": "query",
                      "name": "read",
                      "required": false,
                      "schema": Object {
                        "type": "boolean",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessages",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessages",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/messages/{messageId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  message",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "messages",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single message",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/messages/{messageId}/markRead": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Marks a  message as read",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markRead",
                  "tags": Array [
                    "messages",
                  ],
                },
                "put": Object {
                  "deprecated": false,
                  "description": "Marks a  message as read",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markRead",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/messages/{messageId}/markUnread": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Marks a  message as unread",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markUnread",
                  "tags": Array [
                    "messages",
                  ],
                },
                "put": Object {
                  "deprecated": false,
                  "description": "Marks a  message as unread",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markUnread",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/sms/send": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns an example of the data to POST to send a single message.",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Sends a single message. The <i>recipientNumber</i> and <i>message</i> fields are required. All other fields are optional.",
                  "requestBody": Object {
                    "content": Object {
                      "application/json": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                        },
                      },
                      "application/xml": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                        },
                      },
                    },
                    "description": "request",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponse",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponse",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "400": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/RestErrorDTO",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/RestErrorDTO",
                          },
                        },
                      },
                      "description": "Validation error</br></br>Code and message:<ul><li>2 - Invalid mobile number</li><li>3 - Message cannot be empty</li></ul>",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/sms/send-bulk": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns an example of the data to POST to send multiple messages in one transaction.",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-bulk",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Send multiple messages in one transaction.",
                  "requestBody": Object {
                    "content": Object {
                      "application/json": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                        },
                      },
                      "application/xml": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                        },
                      },
                    },
                    "description": "requests",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponses",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponses",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-bulk",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/sms/send-url-parameters": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.",
                  "parameters": Array [
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url-parameters",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.",
                  "parameters": Array [
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url-parameters",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/sms/send-url/{token}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is ",
                  "parameters": Array [
                    Object {
                      "description": "token",
                      "in": "path",
                      "name": "token",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is ",
                  "parameters": Array [
                    Object {
                      "description": "token",
                      "in": "path",
                      "name": "token",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/templates/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all templates",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplates",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplates",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "templates",
                  ],
                },
              },
              "/api/rest/v1/templates/{templateId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  template",
                  "parameters": Array [
                    Object {
                      "description": "templateId",
                      "in": "path",
                      "name": "templateId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "templates",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single template",
                  "parameters": Array [
                    Object {
                      "description": "templateId",
                      "in": "path",
                      "name": "templateId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplate",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplate",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "templates",
                  ],
                },
              },
            },
            "servers": Array [
              Object {
                "url": "https://www.zoomconnect.com/app",
              },
            ],
            "tags": Array [
              Object {
                "description": "Core information related to your account",
                "name": "account",
              },
              Object {
                "description": "Manage contacts",
                "name": "contacts",
              },
              Object {
                "description": "Number context service",
                "name": "context",
              },
              Object {
                "description": "Manage groups",
                "name": "groups",
              },
              Object {
                "description": "Manage your messages",
                "name": "messages",
              },
              Object {
                "description": "Send and schedule messages",
                "name": "sms",
              },
              Object {
                "description": "Manage your templates",
                "name": "templates",
              },
            ],
          },
        },
        Object {
          "codeFrame": "[90m1692|             $ref: '#/components/schemas/WebServiceMessage'[39m
      [90m1693|           type: array[39m
      [90m1694|     [4m[31mWebServiceNumberContextLookupRequest[0m[24m:[39m
      [90m1695|       description: WebServiceNumberContextLookupRequest[39m
      [90m1696|       properties:[39m",
          "enableCodeframe": true,
          "file": "definitions/openapi-directory/zoomconnect.yaml",
          "fromRule": "no-unused-schemas",
          "location": Object {
            "endCol": 41,
            "endIndex": 46001,
            "endLine": 1694,
            "startCol": 5,
            "startIndex": 45965,
            "startLine": 1694,
          },
          "message": "The schema \\"WebServiceNumberContextLookupRequest\\" is never used.",
          "path": Array [
            "components",
            "schemas",
            "WebServiceNumberContextLookupRequest",
          ],
          "pathStack": Array [],
          "possibleAlternate": undefined,
          "severity": 4,
          "target": "key",
          "value": Object {
            "components": Object {
              "requestBodies": Object {
                "Body": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  },
                  "description": "number",
                },
                "WebServiceContact": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceContact",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceContact",
                      },
                    },
                  },
                  "description": "webServiceContact",
                },
                "WebServiceGroup": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceGroup",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceGroup",
                      },
                    },
                  },
                  "description": "webServiceGroup",
                },
                "WebServiceUser": Object {
                  "content": Object {
                    "application/json": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceUser",
                      },
                    },
                    "application/xml": Object {
                      "schema": Object {
                        "$ref": "#/components/schemas/WebServiceUser",
                      },
                    },
                  },
                  "description": "request",
                },
              },
              "schemas": Object {
                "Link": Object {
                  "properties": Object {
                    "href": Object {
                      "type": "string",
                    },
                    "rel": Object {
                      "type": "string",
                    },
                    "templated": Object {
                      "type": "boolean",
                    },
                  },
                },
                "RestErrorDTO": Object {
                  "description": "RestErrorDTO",
                  "properties": Object {
                    "code": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "developerMessage": Object {
                      "type": "string",
                    },
                    "message": Object {
                      "type": "string",
                    },
                    "moreInfoUrl": Object {
                      "type": "string",
                    },
                    "status": Object {
                      "type": "string",
                    },
                  },
                },
                "Void": Object {},
                "WebServiceAccount": Object {
                  "description": "WebServiceAccount",
                  "properties": Object {
                    "creditBalance": Object {
                      "format": "double",
                      "type": "number",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceContact": Object {
                  "description": "WebServiceContact",
                  "properties": Object {
                    "contactId": Object {
                      "type": "string",
                    },
                    "contactNumber": Object {
                      "type": "string",
                    },
                    "firstName": Object {
                      "type": "string",
                    },
                    "lastName": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "title": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceContactLink": Object {
                  "description": "WebServiceContactLink",
                  "properties": Object {
                    "contactId": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceContacts": Object {
                  "description": "WebServiceContacts",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "webServiceContacts": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceContact",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceGroup": Object {
                  "description": "WebServiceGroup",
                  "properties": Object {
                    "groupId": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "name": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceGroups": Object {
                  "description": "WebServiceGroups",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "webServiceGroups": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceGroup",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceMessage": Object {
                  "description": "WebServiceMessage",
                  "properties": Object {
                    "campaign": Object {
                      "type": "string",
                    },
                    "contact": Object {
                      "$ref": "#/components/schemas/WebServiceContactLink",
                    },
                    "creditCost": Object {
                      "format": "double",
                      "type": "number",
                    },
                    "dateTimeReceived": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "dateTimeScheduled": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "dateTimeSent": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "deleted": Object {
                      "type": "boolean",
                    },
                    "fromNumber": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "message": Object {
                      "type": "string",
                    },
                    "messageId": Object {
                      "type": "string",
                    },
                    "messageStatus": Object {
                      "type": "string",
                    },
                    "messageType": Object {
                      "type": "string",
                    },
                    "numberOfMessages": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "read": Object {
                      "type": "boolean",
                    },
                    "toNumber": Object {
                      "type": "string",
                    },
                    "userDataField": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceMessages": Object {
                  "description": "WebServiceMessages",
                  "properties": Object {
                    "elements": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "page": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "pageSize": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "totalElements": Object {
                      "format": "int64",
                      "type": "integer",
                    },
                    "totalPages": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "webServiceMessages": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceMessage",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceNumberContextLookupRequest": Object {
                  "description": "WebServiceNumberContextLookupRequest",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "numbers": Object {
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceNumberContextLookupResponse": Object {
                  "description": "WebServiceNumberContextLookupResponse",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "number": Object {
                      "type": "string",
                    },
                    "numberValid": Object {
                      "type": "boolean",
                    },
                  },
                },
                "WebServiceSendSmsRequest": Object {
                  "description": "WebServiceSendSmsRequest",
                  "properties": Object {
                    "campaign": Object {
                      "type": "string",
                    },
                    "dataField": Object {
                      "type": "string",
                    },
                    "dateToSend": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "message": Object {
                      "type": "string",
                    },
                    "recipientNumber": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceSendSmsRequests": Object {
                  "description": "WebServiceSendSmsRequests",
                  "properties": Object {
                    "defaultDateToSend": Object {
                      "format": "date-time",
                      "type": "string",
                    },
                    "messagesPerMinute": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "sendSmsRequests": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceSendSmsResponse": Object {
                  "description": "WebServiceSendSmsResponse",
                  "properties": Object {
                    "error": Object {
                      "type": "string",
                    },
                    "messageId": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceSendSmsResponses": Object {
                  "description": "WebServiceSendSmsResponses",
                  "properties": Object {
                    "sendSmsResponses": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceSendSmsResponse",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceTemplate": Object {
                  "description": "WebServiceTemplate",
                  "properties": Object {
                    "data": Object {
                      "type": "string",
                    },
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "name": Object {
                      "type": "string",
                    },
                    "templateId": Object {
                      "format": "int64",
                      "type": "integer",
                    },
                  },
                },
                "WebServiceTemplates": Object {
                  "description": "WebServiceTemplates",
                  "properties": Object {
                    "links": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/Link",
                      },
                      "type": "array",
                    },
                    "webServiceTemplates": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceTemplate",
                      },
                      "type": "array",
                    },
                  },
                },
                "WebServiceTransferCreditsRequest": Object {
                  "description": "WebServiceTransferCreditsRequest",
                  "properties": Object {
                    "numberOfCreditsToTransfer": Object {
                      "format": "int32",
                      "type": "integer",
                    },
                    "transferFromEmailAddress": Object {
                      "type": "string",
                    },
                    "transferToEmailAddress": Object {
                      "type": "string",
                    },
                  },
                },
                "WebServiceUser": Object {
                  "description": "WebServiceUser",
                  "properties": Object {
                    "company": Object {
                      "type": "string",
                    },
                    "contactNumber": Object {
                      "type": "string",
                    },
                    "creditBalance": Object {
                      "format": "double",
                      "type": "number",
                    },
                    "emailAddress": Object {
                      "type": "string",
                    },
                    "firstName": Object {
                      "type": "string",
                    },
                    "lastName": Object {
                      "type": "string",
                    },
                    "password": Object {
                      "type": "string",
                    },
                    "userId": Object {
                      "format": "int64",
                      "type": "integer",
                    },
                  },
                },
                "WebServiceUsers": Object {
                  "description": "WebServiceUsers",
                  "properties": Object {
                    "webServiceUserList": Object {
                      "items": Object {
                        "$ref": "#/components/schemas/WebServiceUser",
                      },
                      "type": "array",
                    },
                  },
                },
              },
              "securitySchemes": Object {
                "email": Object {
                  "in": "header",
                  "name": "email",
                  "type": "apiKey",
                },
                "token": Object {
                  "in": "header",
                  "name": "token",
                  "type": "apiKey",
                },
              },
            },
            "info": Object {
              "description": "The world's greatest SMS API",
              "title": "Zoom Connect",
              "version": "1",
              "x-apisguru-categories": Array [
                "messaging",
                "marketing",
              ],
              "x-logo": Object {
                "url": "http://zoomconnect.com/assets/logo.png",
              },
              "x-origin": Array [
                Object {
                  "converter": Object {
                    "url": "https://github.com/lucybot/api-spec-converter",
                    "version": "2.0.1",
                  },
                  "format": "swagger",
                  "url": "https://www.zoomconnect.com/zoom/api-docs",
                  "version": "1.2",
                },
              ],
              "x-providerName": "zoomconnect.com",
              "x-tags": Array [
                "SMS",
                "bulk SMS",
              ],
            },
            "openapi": "3.0.0",
            "paths": Object {
              "/api/rest/v1/account/balance": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns your account's credit balance",
                  "operationId": "getBalance",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceAccount",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceAccount",
                          },
                        },
                      },
                      "description": "Success",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "balance",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/account/transfer": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Transfers credits between two users in the same team. The <i>account email address</i> fields as well as the <i>number of credits to transfer</i> are required. ",
                  "operationId": "transfer",
                  "requestBody": Object {
                    "content": Object {
                      "application/json": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceTransferCreditsRequest",
                        },
                      },
                      "application/xml": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceTransferCreditsRequest",
                        },
                      },
                    },
                    "description": "request",
                  },
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "transfer",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/account/user": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Find a user for a particular email address",
                  "operationId": "search",
                  "parameters": Array [
                    Object {
                      "description": "search by email address",
                      "in": "query",
                      "name": "searchEmail",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUsers",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUsers",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "search",
                  "tags": Array [
                    "account",
                  ],
                },
                "put": Object {
                  "deprecated": false,
                  "description": "Creates a new sub-account in your team. The following fields are required <i>firstname, lastname, email address, contact number</i> and <i>password.</i>",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceUser",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "create",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/account/user/{userId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Gets a user from a given user id",
                  "operationId": "getUser",
                  "parameters": Array [
                    Object {
                      "description": "userId",
                      "in": "path",
                      "name": "userId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "getUser",
                  "tags": Array [
                    "account",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Updates a sub-account in your team. The following fields can be updated <i>firstname, lastname, contact number</i> and <i>password.</i>",
                  "parameters": Array [
                    Object {
                      "description": "userId",
                      "in": "path",
                      "name": "userId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceUser",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceUser",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "update",
                  "tags": Array [
                    "account",
                  ],
                },
              },
              "/api/rest/v1/contacts/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all contacts",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContacts",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContacts",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/create": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Creates a  contact",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceContact",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "No response was specified",
                    },
                    "201": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "create",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/{contactId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  contact",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single contact",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Updates a  contact",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceContact",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceContact",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "update",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/{contactId}/addFromGroup/{groupId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeFromGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeFromGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/contacts/{contactId}/addToGroup/{groupId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addToGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addToGroup",
                  "tags": Array [
                    "contacts",
                  ],
                },
              },
              "/api/rest/v1/context/lookup": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns context information for a single provided",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/Body",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                      },
                      "description": "Success",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "lookup",
                  "tags": Array [
                    "context",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Returns context information for a single provided",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/Body",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceNumberContextLookupResponse",
                          },
                        },
                      },
                      "description": "Success",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "lookup",
                  "tags": Array [
                    "context",
                  ],
                },
              },
              "/api/rest/v1/groups/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all groups",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroups",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroups",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/create": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Create a  group",
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceGroup",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "No response was specified",
                    },
                    "201": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "create",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/{groupId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "groups",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "groups",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Update a  group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "requestBody": Object {
                    "$ref": "#/components/requestBodies/WebServiceGroup",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceGroup",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "update",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/{groupId}/addContact/{contactId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addContact",
                  "tags": Array [
                    "groups",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Add a contact to a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "addContact",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/groups/{groupId}/removeContact/{contactId}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeContact",
                  "tags": Array [
                    "groups",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Remove a contact from a group",
                  "parameters": Array [
                    Object {
                      "description": "groupId",
                      "in": "path",
                      "name": "groupId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "contactId",
                      "in": "path",
                      "name": "contactId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "removeContact",
                  "tags": Array [
                    "groups",
                  ],
                },
              },
              "/api/rest/v1/messages/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all messages",
                  "parameters": Array [
                    Object {
                      "description": "number of elements to return at a time",
                      "in": "query",
                      "name": "pageSize",
                      "required": false,
                      "schema": Object {
                        "default": 100,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    Object {
                      "description": "page number",
                      "in": "query",
                      "name": "page",
                      "required": false,
                      "schema": Object {
                        "default": 1,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    Object {
                      "description": "filter by message type",
                      "in": "query",
                      "name": "type",
                      "required": false,
                      "schema": Object {
                        "enum": Array [
                          "OUTBOUND",
                          "INBOUND",
                        ],
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "filter by message status",
                      "in": "query",
                      "name": "status",
                      "required": false,
                      "schema": Object {
                        "enum": Array [
                          "SCHEDULED",
                          "UNKNOWN",
                          "SENT",
                          "FAILED",
                          "FAILED_REFUNDED",
                          "FAILED_OPTOUT",
                          "DELIVERED",
                          "RECEIVED",
                        ],
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "fromDateTimeSent",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "toDateTimeSent",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "fromDateTimeReceived",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMdd",
                      "in": "query",
                      "name": "toDateTimeReceived",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "phone number the message was sent from",
                      "in": "query",
                      "name": "fromNumber",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "phone number the message was sent to",
                      "in": "query",
                      "name": "toNumber",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "search matching message text",
                      "in": "query",
                      "name": "message",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "search by campaign",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "search by data field",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "return only deleted / not deleted messages",
                      "in": "query",
                      "name": "deleted",
                      "required": false,
                      "schema": Object {
                        "type": "boolean",
                      },
                    },
                    Object {
                      "description": "return only read / unread messages (inbox messages only)",
                      "in": "query",
                      "name": "read",
                      "required": false,
                      "schema": Object {
                        "type": "boolean",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessages",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessages",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/messages/{messageId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  message",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "messages",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single message",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/messages/{messageId}/markRead": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Marks a  message as read",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markRead",
                  "tags": Array [
                    "messages",
                  ],
                },
                "put": Object {
                  "deprecated": false,
                  "description": "Marks a  message as read",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markRead",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/messages/{messageId}/markUnread": Object {
                "post": Object {
                  "deprecated": false,
                  "description": "Marks a  message as unread",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markUnread",
                  "tags": Array [
                    "messages",
                  ],
                },
                "put": Object {
                  "deprecated": false,
                  "description": "Marks a  message as unread",
                  "parameters": Array [
                    Object {
                      "description": "messageId",
                      "in": "path",
                      "name": "messageId",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceMessage",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "markUnread",
                  "tags": Array [
                    "messages",
                  ],
                },
              },
              "/api/rest/v1/sms/send": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns an example of the data to POST to send a single message.",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Sends a single message. The <i>recipientNumber</i> and <i>message</i> fields are required. All other fields are optional.",
                  "requestBody": Object {
                    "content": Object {
                      "application/json": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                        },
                      },
                      "application/xml": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequest",
                        },
                      },
                    },
                    "description": "request",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponse",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponse",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "400": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/RestErrorDTO",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/RestErrorDTO",
                          },
                        },
                      },
                      "description": "Validation error</br></br>Code and message:<ul><li>2 - Invalid mobile number</li><li>3 - Message cannot be empty</li></ul>",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/sms/send-bulk": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns an example of the data to POST to send multiple messages in one transaction.",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-bulk",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Send multiple messages in one transaction.",
                  "requestBody": Object {
                    "content": Object {
                      "application/json": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                        },
                      },
                      "application/xml": Object {
                        "schema": Object {
                          "$ref": "#/components/schemas/WebServiceSendSmsRequests",
                        },
                      },
                    },
                    "description": "requests",
                  },
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponses",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceSendSmsResponses",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-bulk",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/sms/send-url-parameters": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.",
                  "parameters": Array [
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url-parameters",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.",
                  "parameters": Array [
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url-parameters",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/sms/send-url/{token}": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is ",
                  "parameters": Array [
                    Object {
                      "description": "token",
                      "in": "path",
                      "name": "token",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url",
                  "tags": Array [
                    "sms",
                  ],
                },
                "post": Object {
                  "deprecated": false,
                  "description": "Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is ",
                  "parameters": Array [
                    Object {
                      "description": "token",
                      "in": "path",
                      "name": "token",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the phone number of the recipient to send to",
                      "in": "query",
                      "name": "recipientNumber",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "the message to send",
                      "in": "query",
                      "name": "message",
                      "required": true,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "date format: yyyyMMddHHmm",
                      "in": "query",
                      "name": "dateToSend",
                      "required": false,
                      "schema": Object {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional campaign name",
                      "in": "query",
                      "name": "campaign",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                    Object {
                      "description": "optional extra data",
                      "in": "query",
                      "name": "dataField",
                      "required": false,
                      "schema": Object {
                        "type": "string",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "type": "string",
                          },
                        },
                      },
                      "description": "Description was not specified",
                    },
                    "201": Object {
                      "description": "Created",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "send-url",
                  "tags": Array [
                    "sms",
                  ],
                },
              },
              "/api/rest/v1/templates/all": Object {
                "get": Object {
                  "deprecated": false,
                  "description": "Returns all templates",
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplates",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplates",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "all",
                  "tags": Array [
                    "templates",
                  ],
                },
              },
              "/api/rest/v1/templates/{templateId}": Object {
                "delete": Object {
                  "deprecated": false,
                  "description": "Deletes a  template",
                  "parameters": Array [
                    Object {
                      "description": "templateId",
                      "in": "path",
                      "name": "templateId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "description": "Description was not specified",
                    },
                    "204": Object {
                      "description": "No Content",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                  },
                  "summary": "delete",
                  "tags": Array [
                    "templates",
                  ],
                },
                "get": Object {
                  "deprecated": false,
                  "description": "Returns details for a single template",
                  "parameters": Array [
                    Object {
                      "description": "templateId",
                      "in": "path",
                      "name": "templateId",
                      "required": true,
                      "schema": Object {
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                  ],
                  "responses": Object {
                    "200": Object {
                      "content": Object {
                        "application/json": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplate",
                          },
                        },
                        "application/xml": Object {
                          "schema": Object {
                            "$ref": "#/components/schemas/WebServiceTemplate",
                          },
                        },
                      },
                      "description": "OK",
                    },
                    "401": Object {
                      "description": "Unauthorized",
                    },
                    "403": Object {
                      "description": "Forbidden",
                    },
                    "404": Object {
                      "description": "Not Found",
                    },
                  },
                  "summary": "get",
                  "tags": Array [
                    "templates",
                  ],
                },
              },
            },
            "servers": Array [
              Object {
                "url": "https://www.zoomconnect.com/app",
              },
            ],
            "tags": Array [
              Object {
                "description": "Core information related to your account",
                "name": "account",
              },
              Object {
                "description": "Manage contacts",
                "name": "contacts",
              },
              Object {
                "description": "Number context service",
                "name": "context",
              },
              Object {
                "description": "Manage groups",
                "name": "groups",
              },
              Object {
                "description": "Manage your messages",
                "name": "messages",
              },
              Object {
                "description": "Send and schedule messages",
                "name": "sms",
              },
              Object {
                "description": "Manage your templates",
                "name": "templates",
              },
            ],
          },
        },
      ]
    `);
  });
});
