export default controller => {
    // 朝の挨拶
    controller.hears(
        ['おはよう'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'おはようございます',
                '朝ですか、おはようございます',
                '...zZＺ',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['こんにちは', 'こんにちわ'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'こんにちは',
                'こんにちは、お昼はもう食べましたか？',
                'こんにちは。お昼を食べた後は眠くなりますね。',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['さよなら', 'おやすみ', 'おつかれ', 'お疲れ'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'お疲れ様でした',
                '今日も1日大変でしたね。お疲れ様でした。',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['おーい', 'おい'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'へーい',
                'はい',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

};
