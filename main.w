bring cloud;
bring http;

let api = new cloud.Api() as "api";
let counter = new cloud.Counter() as "counter";

api.get("/button", inflight() => {
    counter.inc();
    return cloud.ApiResponse {
      status: 200,
      body: Json.stringify(counter.peek())
    };
});

// let getGitHubActivity = new cloud.Function(inflight () => {
//   let username = "polamoros";
//   let response = http.fetch("https://api.github.com/users/{username}/events");
//   let data = response.body;
//   log(data);
// });
