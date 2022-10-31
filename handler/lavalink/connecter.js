const config = require("../botconfigs/config.js");

module.exports = (bot) => {
  bot.createLavalinkConnection(
    config.lava_settings.node_1,
    config.lava_settings.Host_password,
    true,
    false
  );

  /*bot.createLavalinkConnection(config.lava_settings.node_2, config.lava_settings.Host_password, debug, ssl);*/

  /* 
  bot.createLavalinkConnection(config.lava_settings.node_3, config.lava_settings.Host_password, true, true);
  
  bot.createLavalinkConnection(config.lava_settings.node_4, config.lava_settings.Host_password, true, true);
  
  bot.createLavalinkConnection(config.lava_settings.node_5, config.lava_settings.Host_password, true, true); */
};
