bring cloud;

let api = new cloud.Api() as "api";
let counter = new cloud.Counter() as "counter";

api.get("/button", inflight() => {
    counter.inc();
});
