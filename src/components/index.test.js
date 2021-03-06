/* eslint import/namespace: ['error', { allowComputed: true }] */
/**
 * Important: This test also serves as a point to
 * import the entire lib for coverage reporting
 */

import { expect } from "chai";
import * as MaterialUI from "./index";

describe("material-ui", () => {
  it("should have exports", () => {
    expect(typeof MaterialUI).to.equal("object");
  });

  it("should not do undefined exports", () => {
    Object.keys(MaterialUI).forEach(exportKey =>
      expect(Boolean(MaterialUI[exportKey])).to.equal(true)
    );
  });
});
