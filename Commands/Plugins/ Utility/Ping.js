module.exports = {
  name: "ping",
  description: "Shows bot Ping",
  category: "General Commands",
  usage: `$getServerVar[prefix]ping`,
  code: ` $color[$getServerVar[color]]
$description[
  Websocket Ping   : $numberSeparator[$ping]ms
  Database  Ping   : $numberSeparator[$dbPing]ms
  $setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
  $cooldown[3s;Please wait **%time%** before using again.]
  
  $log[[DEBUG] :: $username, used the ping command]`,
};
