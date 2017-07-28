import BotKit from 'botkit';
import GreedingCtrl from './controllers/GreedingCtrl';
import NewsFeedCtrl from './controllers/NewsFeedCtrl';

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

const controller = BotKit.slackbot({
    debug: process.env.NODE_ENV === 'production' ? false : true
});

const bot = controller.spawn({
    token: process.env.token
}).startRTM((err, bot, payload) => {
    if(err) { throw new Error('bot does not wake up...'); }

    // 挨拶
    GreedingCtrl(controller);
    // ニュースのつぶやき
    NewsFeedCtrl(bot);
});
