module.exports = {
  name: "prefix",
  aliases: ["changeprefix", "setprefix", "change prefix"],
  code: `
    $title[Prefix change]
    $color[$getServerVar[color]]
    $footer[prefix changed by $username#$discriminator[$authorid]; $userAvatar[896303947311104041]]
    $thumbnail[$userAvatar[896303947311104041]]
    $description[i changed my prefix to **$message** if you think this is a mistake u can always change it back]
    $setservervar[prefix;$message]
    $argscheck[>1;you're prefix can't be empty]
    $onlyPerms[manageserver;need manageserver perm]
    $onlyIF[$memberscount>10;$servername must atleast have 10 members ]
    
    $log[[DEBUG] :: $username, changed the bots prefix to $getServerVar[prefix]] in $serverName]`,
};
