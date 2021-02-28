const profile = require('./profile');

const usernames = process.argv.slice(2);
usernames.forEach(profile.get);