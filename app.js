const https = require('https');
const username = 'franktran';

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

https.get(`https://teamtreehouse.com/${username}.json`, res => {
  let body = '';
  res.on('data', data => {
    body += data.toString();
  });
  res.on('end', () => {
    const profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  })
});