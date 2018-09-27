const SlackBot = require('slackbots');
const axios = require('axios');
const bot = new SlackBot({
    token: 'xoxb-444149981586-444335026757-z2w4AaNCtvWt3euHbT4fJJrQ',
    name: 'componentbot'
});
bot.on('start', () => {
    const params = {
        icon_emoji: ':componenthub:'
    };
    bot.postMessageToChannel('general', 'Welcome! you can now search for any components in the store @componentbot', params);
});
//Error handler;
bot.on('error', (err) => console.log(err));
//Message handler;
bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }
    console.log(data);
});