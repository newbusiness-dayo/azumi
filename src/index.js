import BotKit from 'botkit';
import GreedingCtrl from './controllers/GreedingCtrl';
import DialogCtrl   from './controllers/DialogCtrl';
import NewsFeedCtrl from './controllers/NewsFeedCtrl';


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

const controller = BotKit.slackbot({
    debug: process.env.NODE_ENV === 'production' ? false : true
});

controller.spawn({
    token: process.env.token
}).startRTM((err, bot, payload) => {
    if(err) { throw new Error('bot does not wake up...'); }

    // ニュースのつぶやき
    NewsFeedCtrl(bot);
    // 挨拶
    GreedingCtrl(controller);
    // 会話
    DialogCtrl(controller);
});

// dummy http server
import http = from 'http';
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('OK');
}).listen();
