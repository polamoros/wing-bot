"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $Utils, $std_Json, $token }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      {
        const $if_let_value = (request.query)["username"];
        if ($if_let_value != undefined) {
          const username = $if_let_value;
          const activities = (await $Utils.getGitHubActivityGraph(((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(request.query, "username"), (await $token.value()), 365));
          const counts = [];
          for (const activity of activities) {
            counts.push(activity.contributions);
          }
          const frames = [({"index": 0, "chartData": [...(counts)]})];
          return ({"status": 200, "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"frames": frames}))});
        }
        else {
          return ({"status": 400, "body": "ERROR: username param is required"});
        }
      }
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-1.js.map