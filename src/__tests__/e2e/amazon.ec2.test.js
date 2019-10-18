import fs from "fs";

import { validateFromFile } from "../../validate";

describe("Amazon EC2", () => {
  test("./definitions/openapi-directory/amazon.ec2.yaml", () => {
    expect(
      validateFromFile("./definitions/openapi-directory/amazon.ec2.yaml", {})
    ).toMatchInlineSnapshot(`Array []`);
  });
});
