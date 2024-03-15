bring cloud;
// bring http;
// bring math;

let counter = new cloud.Counter();

struct Contribution {
  date: str;
  contributions: num;
}

class Utils {
  extern "./util.ts" pub static inflight getGitHubActivityGraph(username: str, token: str, maxDays: num?): Array<Contribution>;
}

let api = new cloud.Api() as "api";
let token = new cloud.Secret(name: "github-activity-wing-lemetric") as "github_token";

api.get("/getUserActivity", inflight(request) => { 
    if let username = request.query.tryGet("username") {     
      let activities = Utils.getGitHubActivityGraph(
        request.query.get("username"),
        token.value(),
        37
      );

      let counts = MutArray<num> [];
      for activity in activities {
        counts.push(math.min([8, activity.contributions]));
      }
      
      let frames = [
        {
          index: 0,
          chartData: counts.copy(),
        }
      ];
    
      return cloud.ApiResponse {
        status: 200,
        body: Json.stringify({frames: frames})
      };
    } 
    else {
      return cloud.ApiResponse {
        status: 400,
        body: "ERROR: username param is required"
      };
    }
});
