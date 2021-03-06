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
    bot.postMessageToChannel('general', 'Welcome! you can now search for any components/products in the store  By using @componentbot', params);
});
//Error handler;
bot.on('error', (err) => console.log(err));
//Message handler;
bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
});
//Response to data
function handleMessage(message) {
    if (message.includes(' wattbank')) {
        wattBank();
    } else if (message.includes(' photizzo')) {
        photizzoExec();
    } else if (message.includes(' help')) {
        runHelp();
    }
}
function wattBank() {
    axios.get('https://xttreme.herokuapp.com/products')
        .then(res => {
            const searchedResult = res.data.data[0].product_description;
            const params = {
                icon_emoji: ':componenthub:'
            };
            bot.postMessageToChannel('general', `Searched result : ${searchedResult}`, params);
        });
}
function photizzoExec() {
    axios.get('https://api.yomomma.info')
        .then(res => {
            const searchedResult = res.data.joke;
            const params = {
                icon_emoji: ':componenthub:'
            };
            bot.postMessageToChannel('general', `Result : ${searchedResult}`, params);
        });
}
function runHelp() {
    const params = {
        icon_emoji: ':question:'
    };
    bot.postMessageToChannel('general', `type @componentbot with either 'photizzo' or 'wattbank' to get a response`, params);
}
