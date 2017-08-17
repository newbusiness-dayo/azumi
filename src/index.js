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

// dummy http server
import http from 'http';
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('OK');
}).listen(process.env.PORT || 3000, () => {
    console.log(`http server is opened on ${process.env.PORT||3000}`);
});

// setup botkit
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

    controller.hears('*', 'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                '呼ばれ・・・てないですね、はい',
                '・・・なんだネコか',
                '誰か呼びました？気のせいですね。'
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );
});

