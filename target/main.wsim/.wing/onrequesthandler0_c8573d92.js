"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("/Users/polamoros/.nvm/versions/node/v18.18.2/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/api.onrequest.inflight.js")).ApiOnRequestHandlerClient({ handler: 
          (await (async () => {
            const $Closure1Client = 
          require("/Users/polamoros/Projects/WingCloud/wing-bot/target/main.wsim/.wing/inflight.$Closure1-1.js")({
            $Utils: 
          require("/Users/polamoros/Projects/WingCloud/wing-bot/target/main.wsim/.wing/inflight.Utils-1.js")({
          })
        ,
            $std_Json: require("/Users/polamoros/.nvm/versions/node/v18.18.2/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
            $token: (function() {
  let handle = process.env.SECRET_HANDLE_70ad299b;
  if (!handle) {
    throw new Error("Missing environment variable: SECRET_HANDLE_70ad299b");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle);
})(),
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        , args: {} }));
  return await $handler.handle(event);
};