const https = require('https');
const username = 'franktran';

https.get(`https://teamtreehouse.com/${username}.json`, res => {
  console.log(res.statusCode);
});