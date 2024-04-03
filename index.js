const debug = require("debug")("gsi:entrypoint");
const { execSync } = require('child_process');
const browser = require("./browser");

module.exports = async function (argv) {

  debug("Getting repo");
  const { username, repo } = getRepo();
  debug(repo);

  debug("Triggering browser");
  await browser(
    { username, password: argv.password, otp: argv.otp }, // Pass password and otp from argv
    repo,
    argv
  );
};


function getRepo() {
  const url = execSync('git config --get remote.origin.url', { encoding: 'utf8' });
  const urlParts = url.split('/');
  const repoWithExtension = urlParts.pop();
  const username = urlParts.pop();
  const repo = repoWithExtension.split('.')[0];
  return { username, repo: `${username}/${repo}` };
}