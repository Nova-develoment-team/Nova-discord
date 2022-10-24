module.exports = (bot) => {
  bot.status({
    text: "on Google Cloud Platform",
    type: "STREAMING",
    status: "online",
    url: "https://dashboard.nova-bot.tk/",
  });

  bot.status({
    text: "for @Nova.",
    type: "WATCHING",
    status: "online",
    time: 12,
  });

  bot.status({
    text: "for >help",
    type: "WATCHING",
    status: "online",
    time: 12,
  });

  bot.status({
    text: "Humans",
    type: "WATCHING",
    status: "online",
    time: 12,
  });
};
