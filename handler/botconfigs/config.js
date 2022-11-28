require("dotenv").config();

module.exports = {
  Bot: {
    token:
      process.env.token,
    prefix: ["$GetServerVar[prefix]", "<@$clientID>"],
      intents: "all",
    sharding: true,
  },

  bot_settings: {
  ownerid: "845312519001342052",
  path: "/home/runner/Nova-bot/"
  },
    events: {
    antiCrash: true,
    autoUpdate: false,
  },

  respondOnEdit: {
    commands: true,
  },
  debug: {
    iplogging: true,
    interpreter: true,
  },

  suppressAllErrors: {
    errorMessage: [
      "",
      "$log[[ERROR] :: $username had a error in $servername | ERROR ID: $randomString[$random[4;10]]]{newEmbed:{title:Ah oh!}{description:There was a error | ERROR ID: $randomString[$random[4;10]]}{color:fcbfcb}}",
    ],
  },

  lava_settings: {
    node_1: process.env.host /*The lavalink host, Should not add https:// or http:// */,
    Host_password: process.env.lavalink_password /* The lavalinkd host password */,
  },

  website_settings: {
    title: process.env.title,
    domain: process.env.website_domain,
    Maintnance: false,
    bg: "https://cdn.nova-bot.tk/chrome_s9GZjpKOvb.png/direct",
  },

  dash_settings: {
    id: "1046016653269418075",
    secret: process.env.bot_secret,
    redirect: process.env.website_redirect,
  },

admin_panel_settings: {
  username: process.env.admin_panel_username,
  password: process.env.admin_panel_password
},

  db_settings: {
    uri: "mongodb://admin:WB0mAPwohq@n2.luxxy.host:1802?authSource=admin" /* MongoDB atlast uri */,
  },
};

