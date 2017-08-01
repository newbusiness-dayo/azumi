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
        ['忍者', 'にんじゃ', 'ninja'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                '日光江戸村！来てちょんまげ',
                'なんですか、嵩丸'
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['疲れた', 'つかれた'],
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
        ['ねむい', '眠い'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'お疲れ様です。',
                'そろそろ寝てはいかがですか？',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['助かった', '助かる', '助かります'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'いえ、私はそんなに大したことは',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['さすが', 'すごい'],
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
        ['おなかすいた', 'お腹すいた', 'お腹空いた'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'ぺこり',
                '何も食べてないんですか?',
                '今すぐ食べて下さい',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

    controller.hears(
        ['ありがとう'],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'いえ、私はそんなに大したことは',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );
};
