bring cloud;
bring vite;

let api = new cloud.Api();

let website = new vite.Vite(
  // The path to the website root.
  root: "./website",

  // Environment variables passed to the Vite project.
  // They'll available through the global `wing` object.
  publicEnv: {
    API_URL: api.url,
  },
);

// Get the URL of the website.
let url = website.url;
