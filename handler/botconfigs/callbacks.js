module.exports = (bot) => {
  bot.onMessage({ guildOnly: false });
  bot.onInteractionCreate();
  bot.onGuildJoin();
};
