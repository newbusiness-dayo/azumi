export default controller => {
    // 朝の挨拶
    controller.hears(
        ["おはよう"],
        'direct_message,direct_mention,mention',
        (bot, message) => {
            const text = [
                'おはようございます。',
                '朝ですか、おはようございます',
                'お元気そうで何よりです',
                '...zZＺ',
            ];
            bot.reply(message, text[(Math.random() * text.length)|0]);
        }
    );

};
