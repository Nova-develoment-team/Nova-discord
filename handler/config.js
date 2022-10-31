module.exports = {
  bots_settings: {
    token: process.env.token,
  },

  dash_settings: {
    id: process.env.dash_id,
    secret: process.env.dash_secret,
    redirect: process.env.dash_redirect,
    admin_username: process.env.admin_user,
    admin_password: process.env.admin_pass,
  },

  webite_settings: {
    title: "Nova",
    url: "https://dashboard.nova-bot.tk",
    "status-page": "https://status.nova-bot.tk",
    "embed-description": "the best bot",
  },
};
