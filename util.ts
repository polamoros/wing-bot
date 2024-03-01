import { Octokit } from "@octokit/rest";

export interface Contribution {
  date: string;
  contributions: number;
}

export const getGitHubActivityGraph = async (
  username: string,
  token: string,
  maxDays: number = 365
): Promise<Contribution[]> => {
  const octokit = new Octokit({
    auth: token,
  });
  const response = (await octokit.graphql(
    `query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`
  )) as any;

  const weeks =
    response.user.contributionsCollection.contributionCalendar.weeks;

  const contributions = weeks
    .map((week) => week.contributionDays)
    .flat()
    .map((day) => {
      return {
        date: day.date,
        contributions: day.contributionCount,
      };
    });

  return contributions.slice(-maxDays);
};
