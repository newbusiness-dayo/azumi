import moment from 'moment';
import RssWatcher from '../libs/RssReader';

const NEWS_URL ="http://b.hatena.ne.jp/search/text?q=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E6%95%99%E8%82%B2+%7C+%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E6%95%99%E6%9D%90+%7C+%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E6%95%99%E5%AE%A4+%7C+ICT%E6%95%99%E8%82%B2&mode=rss";
let lastArticleDate = process.env.last_article_date|0;
export default bot => {
    const watcher = new RssWatcher(NEWS_URL);

    watcher.on('new_article', articles => {
        const texts = [];
        articles.forEach(article => {
            const articleDate = moment(article.date).format('x');
            if (lastArticleDate < articleDate) {
                texts.push(toPostText(article));
            }
        })

        if(texts.length === 0) {
            console.info('no new articles');
            return;
        }

        bot.say({
            text: texts.join('\n'),
            channel: process.env.channel
        });

        lastArticleDate = moment(articles.pop().date).format('x');
        console.debug(lastArticleDate);
    });
};

const toPostText = (article) => {
    const date  = moment(article.date);
    const title = article.title;
    const link  = article.link;

    return `${date.format('YYYY/MM/DD hh:mm:ss')} - ${title}\n${link}\n`
};
