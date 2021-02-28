const https = require('https');

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

function getProfile(username) {
  try {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, res => {
      let body = '';
      res.on('data', data => {
        body += data.toString();
      });
      res.on('end', () => {
        const profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
      })
    });
    request.on('error', error => {
      console.error(error.message);
    });
  } catch (error) {
    console.error(error.message);
  }
}
const usernames = process.argv.slice(2);
usernames.forEach(username => getProfile(username));