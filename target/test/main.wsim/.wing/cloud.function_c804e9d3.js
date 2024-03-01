"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure2Client = 
          require("/Users/polamoros/Projects/WingCloud/wing-bot/target/test/main.wsim/.wing/inflight.$Closure2-1.js")({
            $Utils: 
          require("/Users/polamoros/Projects/WingCloud/wing-bot/target/test/main.wsim/.wing/inflight.Utils-1.js")({
          })
        ,
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};