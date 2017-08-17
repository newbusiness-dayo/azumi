import moment from 'moment';
import RssWatcher from '../libs/RssReader';

const NEWS_URL = 'http://b.hatena.ne.jp/search/text?safe=on&q=%E6%95%99%E8%82%B2+%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0+%7C+%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0+%E6%95%99%E6%9D%90+%7C+ICT%E6%95%99%E8%82%B2+%7C+%E5%B0%8F%E5%AD%A6%E7%94%9F+%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0+%7C+%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0+%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB&users=1&mode=rss';
let lastArticleDate = parseInt(process.env.last_article_date);
export default bot => {
    const watcher = new RssWatcher(NEWS_URL);

    watcher.on('new_article', articles => {
        const texts = [];
        articles.forEach(article => {
            const articleDate = moment(article.date).format('x');
            if (lastArticleDate < articleDate) {
                texts.push(toPostText(article));
            }
        });

        if(texts.length === 0) {
            console.info(`no new articles from ${moment(lastArticleDate).format('YYYY/MM/DD HH:mm:ss')}`);
            return;
        }

        texts.forEach(text => {
            bot.say({
                text: text,
                channel: process.env.channel
            });
            sleep(500);
        });

        lastArticleDate = +moment(articles.pop().date).format('x');
        console.info(`last article date: ${lastArticleDate}`);
    });

    watcher.on('error', err => {
        console.warn(err);
    });

};

const toPostText = (article) => {
    const date  = moment(article.date);
    const title = article.title;
    const link  = article.link;

    return `${date.format('YYYY/MM/DD hh:mm:ss')} - ${title}\n${link}\n`;
};

const sleep = function(time) {
    const d1 = new Date();
    while (true) {
        const d2 = new Date();
        if (d2 - d1 > time) return;
    }
};
