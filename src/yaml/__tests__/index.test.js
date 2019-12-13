import fs from "fs";
import { getLocationByPath, getCodeFrameForLocation } from "../index";

describe("getLocationByPath", () => {
  test("", () => {
    const context = {
      source: fs.readFileSync("./definitions/syntetic/syntetic-1.yaml", "utf-8")
    };

    expect(
      getLocationByPath(
        ["paths", "user", "get", "responses", "200"],
        context,
        "key"
      )
    ).toMatchInlineSnapshot(`
      Object {
        "endCol": 14,
        "endIndex": 487,
        "endLine": 27,
        "startCol": 9,
        "startIndex": 482,
        "startLine": 27,
      }
    `);
  });

  test("", () => {
    const context = {
      source: fs.readFileSync("./definitions/syntetic/syntetic-1.yaml", "utf-8")
    };

    expect(getLocationByPath([""], context, "key")).toMatchInlineSnapshot(`
      Object {
        "endCol": 14,
        "endIndex": 14,
        "endLine": 1,
        "startCol": 0,
        "startIndex": 0,
        "startLine": 1,
      }
    `);
  });

  test("", () => {
    const context = {
      source: fs.readFileSync("./definitions/syntetic/syntetic-1.yaml", "utf-8")
    };

    expect(
      getLocationByPath(["paths", "user", "parameters", "0"], context, "key")
    ).toMatchInlineSnapshot(`
      Object {
        "endCol": 47,
        "endIndex": 392,
        "endLine": 22,
        "startCol": 9,
        "startIndex": 353,
        "startLine": 22,
      }
    `);
  });

  test("", () => {
    const context = {
      source: fs.readFileSync("./definitions/syntetic/syntetic-1.yaml", "utf-8")
    };

    expect(
      getLocationByPath(
        ["paths", "user", "parameters", "0", "ttt"],
        context,
        "key"
      )
    ).toMatchInlineSnapshot(`
      Object {
        "endCol": 47,
        "endIndex": 392,
        "endLine": 22,
        "startCol": 9,
        "startIndex": 353,
        "startLine": 22,
      }
    `);
  });

  test("", () => {
    const context = {
      source: fs.readFileSync("./definitions/syntetic/syntetic-1.yaml", "utf-8")
    };

    expect(
      getLocationByPath(
        ["paths", "user", "get", "responses", "200"],
        context,
        "value"
      )
    ).toMatchInlineSnapshot(`
      Object {
        "endCol": 28,
        "endIndex": 631,
        "endLine": 32,
        "startCol": 9,
        "startIndex": 482,
        "startLine": 27,
      }
    `);
  });
});

describe("getCodeFrameForLocation", () => {
  test("", () => {
    const source = fs.readFileSync(
      "./definitions/syntetic/syntetic-1.yaml",
      "utf-8"
    );
    expect(getCodeFrameForLocation(276, 281, source)).toMatchInlineSnapshot(`
      "[90m1|         url: example.org[39m
      [90m0| [39m
      [90m1| se[4m[31mrvers[90m[24m:[39m
      [90m2|   - url: 'http://example.org'[39m
      [90m3| [39m"
    `);
  });

  test("", () => {
    const source = fs.readFileSync(
      "./definitions/syntetic/syntetic-1.yaml",
      "utf-8"
    );
    expect(getCodeFrameForLocation(276, 425, source)).toMatchInlineSnapshot(`
      "[90m-1|         url: example.org[39m
      [90m00| [39m
      [90m01| se[4m[31mrvers:[90m[24m[39m
      [90m02|[39m[31m [4m[31m  - url: 'http://example.org'[31m[24m[39m
      [90m03|[39m[31m [4m[31m[31m[24m[39m
      [90m04|[39m[31m [4m[31mpaths:[31m[24m[39m
      [90m05|[39m[31m [4m[31m  user:[31m[24m[39m
      [90m06|[39m[31m [4m[31m    parameters:[31m[24m[39m
      [90m07|[39m[31m [4m[31m      - $ref: '#/components/parameters/example'[31m[24m[39m
      [90m08|[39m[31m [4m[31m    get:[31m[24m[39m
      [90m09| [4m[31m      operationId: user[90m[24mGet[39m
      [90m10|       description: Get user[39m
      [90m11|       responses:[39m"
    `);
  });

  test("", () => {
    const source = fs.readFileSync(
      "./definitions/syntetic/syntetic-1.yaml",
      "utf-8"
    );
    expect(getCodeFrameForLocation(0, 7, source)).toMatchInlineSnapshot(`
      "[90m1| [4m[31mopenapi[90m[24m: 3.0.2[39m
      [90m2| x-redocly-context:[39m
      [90m3|   version: default[39m"
    `);
  });

  test("", () => {
    const source = fs.readFileSync(
      "./definitions/syntetic/syntetic-1.yaml",
      "utf-8"
    );
    expect(getCodeFrameForLocation(0, 14, source)).toMatchInlineSnapshot(`
      "[90m1|[39m[31m [4m[31mopenapi: 3.0.2[31m[24m[39m
      [90m2| x-redocly-context:[39m
      [90m3|   version: default[39m"
    `);
  });
});
