
module.exports = {
  Bot: {
    token:
      "ODk2MzAzOTQ3MzExMTA0MDQx.GUSmki.OF6p6zYwAOvfBRRgI36Xk9WG3NmF6nDur_qE90",
    prefix: ["$GetServerVar[prefix]", "<@$clientID>"],
      intents: "all",
    sharding: true,
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
    node_1:
      "lavalink-node-2-5.nova-team.repl.co" /*The lavalink host, Should not add https:// or http:// /*/,
    Host_password: "NovaLavalink" /* The lavalinkd host password */
  },

  website_settings: {
    tab_title: "Nova bot",
    embed_description: "Nova the best discord bot",
    domain: "https://dashboard.nova-bot.tk",
    Status_page: "https://status.nova-bot.tk",
    Bot_name: "Nova",
    Maintnance: false,
        title: "Nova",
    bg: "https://cdn.nova-bot.tk/chrome_s9GZjpKOvb.png/direct",
  },

  dash_settings: {
    id: "",
    secret: "",
    redirect: "https://dashboard.nova-bot.tk/auth/callback",
  },

  db_settings: {
    uri: "" /* MongoDB atlast uri */,
  },
};

