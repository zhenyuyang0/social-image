#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .option("password", {
    type: "string",
    description: "GitHub Password",
    default: process.env.GITHUB_PASSWORD, // Use environment variable as default
  })

  .option("otp", {
    type: "string",
    description: "GitHub 2FA Code",
    default: process.env.GITHUB_OTP, // Use environment variable as default
  })

  .option("theme", {
    type: "string",
    description: "Theme to use",
    default: "light",
  })
  .choices("theme", ["light", "dark"])

  .option("font", {
    type: "string",
    description: "font to use",
    default: "inter",
  })
  .choices("font", [
    "inter",
    "bitter",
    "raleway",
    "rokkitt",
    "source-code-pro",
    "koho",
  ])

  .option("background", {
    type: "string",
    description: "Background to use",
    default: "plus",
  })
  .choices("background", [
    "signal",
    "charlie-brown",
    "formal-invitation",
    "plus",
    "circuit-board",
    "overlapping-hexagons",
    "brick-wall",
    "floating-cogs",
    "diagonal-stripes",
  ])

  .option("logo", {
    type: "string",
    description: "URL to your logo",
  })

  .option("owner", {
    type: "boolean",
    default: true,
  })
  .option("language", {
    type: "boolean",
    default: true,
  })
  .option("stars", {
    type: "boolean",
    default: false,
  })
  .option("forks", {
    type: "boolean",
    default: false,
  })
  .option("issues", {
    type: "boolean",
    default: false,
  })
  .option("pulls", {
    type: "boolean",
    default: false,
  })

  .option("description", {
    type: "string",
    description: "Description to show",
  })

  .option("show", {
    type: "boolean",
    default: false,
    description: "Show puppeteer in the foreground",
  })
  .argv;

(async function (argv) {
  require(".")(argv);
})(argv);
