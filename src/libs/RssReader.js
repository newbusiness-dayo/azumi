import EventEmitter from 'eventemitter3';
import FeedParser from 'feedparser';
import request from 'superagent';

export default class RssWatcher extends EventEmitter
{
    constructor(rssUrl, interval = 3600) {
        super();

        this._rssUrl = rssUrl;
        if (!this._rssUrl) {
            throw new Error('Rss Url is not specified.');
        }

        this._interval = interval ?
            interval * 1000 :
            3600 * 1000;

        this.articles = [];
        this._loadNewArticles();
    }

    set interval(interval) {
        this._interval = interval ?
            interval * 1000 :
            60 * 60 * 60 * 1000;
    }

    _loadNewArticles() {
        const feedparser = new FeedParser();
        feedparser.on('readable', () => {
            let article;
            while(article = feedparser.read()){
                this.articles.push(article);
            }
        }).on('end', () => {
            this.emit('new_article', this.articles.reverse());
            this.articles = [];
        });

        request.get(this._rssUrl)
            .set('User-Agent', 'superagent')
            .buffer()
            .on('error', err => { this.emit('error', err); })
            .on('response', (res) => {
                if (res.statusCode !== 200) {
                    this.emit('error', new Error`HTTP [${res.statusCode}]`);
                }
            })
            .pipe(feedparser);

        setTimeout(this._loadNewArticles.bind(this), this._interval);
    }

}
