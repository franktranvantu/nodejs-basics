const https = require('https');
const http = require('http');

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

function printError(error) {
  console.log(error.message);
}

function getProfile(username) {
  try {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, res => {
      if (res.statusCode === 200) {
        let body = '';
        res.on('data', data => {
          body += data.toString();
        });
        res.on('end', () => {
          try {
            const profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            printError(error);
          }
        })
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[res.statusCode]}).`;
        const error = new Error(message);
        printError(error);
      }
    });
    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}
const usernames = process.argv.slice(2);
usernames.forEach(username => getProfile(username));