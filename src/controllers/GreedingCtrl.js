export default controller => {
    // 朝の挨拶
    controller.hears(
        ["おはよう"],
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
        ["こんにちは", "こんにちわ"],
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
        ["さよなら", "おやすみ"],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'お疲れ様でした',
                'お疲れ様でした、また明日お会いしましょう',
                '今日も1日大変でしたね。お疲れ様でした。',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ["おつかれ", "お疲れ"],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'いえ、私はそんなに大したことは',
                'ありがとうございます',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ["さすが", "すごい"],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'いえ、滅相もない',
                'そう言って頂けるとありがたいです'
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ["ありがとう"],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'いえ、私はそんなに大したことは',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ["疲れた", "つかれた"],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'お疲れ様です。',
                'あまり無理せず体を労って下さい',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ["ねむい", "眠い"],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'お疲れ様です。',
                'そろそろ寝てはいかがですか？',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );
};
