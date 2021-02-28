const https = require('https');
const username = 'franktran';

https.get(`https://teamtreehouse.com/${username}.json`, res => {
  let body = '';
  res.on('data', data => {
    body += data.toString();
  });
  res.on('end', () => {
    console.log(typeof body);
  })
});