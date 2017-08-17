if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

if (!process.env.channel) {
    console.log('Error: Specify channel in environment');
    process.exit(1);
}

if (!process.env.last_article_date) {
    console.log('Error: Specify last_article_date in environment');
    process.exit(1);
}

require('dotenv').config();
require('babel-register');
require('./src');
