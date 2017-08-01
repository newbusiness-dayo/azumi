export default controller => {
    controller.hears(
        ['はげ', 'ハゲ', '禿'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'うっせー。もげろハゲ！',
                '今日も光ってますね！',
                'ハゲにハゲって言われたくない',
                '良い育毛剤、教えましょうか...?'
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['忍者'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                '日光江戸村！来てちょんまげ'
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );
};
