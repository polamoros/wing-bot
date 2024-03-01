"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Utils {
    constructor({  }) {
    }
    static async getGitHubActivityGraph(username, token, maxDays) {
      return (require("../../../util.ts")["getGitHubActivityGraph"])(username, token, maxDays)
    }
  }
  return Utils;
}
//# sourceMappingURL=inflight.Utils-1.js.map