module.exports = {
  type: "timeoutCommand",
  code: `
    $senddm[$timeoutdata[userid];{description:Oh no! Your server $servername[$timeoutdata[serverid]]'s subscription has expired! You can still use the bot, but you will not be able to use premium features. To renew your subscription, visit https://dashboard.nova-bot.tk/premium (Still in making for now dm duckey#4200)}{color:$getServerVar[color]}]}]
    $setServerVar[premium;false;$timeoutdata[serverid]]]
    $let[embed;{title:$username claimed premium for $servername}{field:Code:$get[used]}{field:username:$username}{field:server name:$serverName}{field:invite:$getServerinvite[$guildid[$servername]]}{field:New codes:
        1 month: $getVar[premiumcode]}]
        $setVar[premiumcode;$randomString[5]-$randomString[7]-$randomString[6]-$randomString[8]-$randomString[9]]
    

    $log[[DEBUG] :: $timeoutdata[servername]'s premium expired]
    `,
};
