module.exports = {
  name: "redeempremium",
  code: `
    $setTimeout[1s;serverid:$guildid]
    $setTimeout[1s;userid:$authorid]
    $setTimeout[1s;servername:$servername]
    
$channelSendmessage[1005105722180255856;$get[embed]]


$let[embed;{title:$username claimed premium for $servername}{field:Code:$get[used]}{field:username:$username}{field:server name:$serverName}{field:invite:$getServerinvite[$guildid[$servername]]}{field:New codes:
    1 month: $getVar[premiumcode]}]
$let[used;$message]

$description[<:success:935751098092884020> Activated Premium]
    $color[$getServerVar[color]]
    $setServerVar[premium;true]
    $setVar[premiumcode;$randomString[5]-$randomString[7]-$randomString[6]-$randomString[8]-$randomString[9]]
    $onlyIf[$getServerVar[premium]==false;{description:<:error:935750920598351872> premium is already claimed for this server}{color:#2f3136}]
    $onlyIf[$message==$getVar[premiumcode];{description:<:error:935750920598351872> Premium code is invalid}{color:#2f3136}]
    
        $deleteCommand
    $log[[DEBUG] :: $serverName Redeemed premium]
    `,
};
