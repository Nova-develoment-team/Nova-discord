module.exports = {
  name: "rank",
  aliases: "level",
  category: "Levelling",
  description: "Check the rank of a user.",
  usage: "rank <optional user>",
  code: `$if[$message==]
$attachment[https://api2.nova-bot.tk/rankcard?avatar=$replaceText[$userAvatar[$findmember[$message;yes]];webp;png]&name=$uri[encode;$get[username]]&exp=$getUserVar[exp;$get[user]]&maxexp=$getUserVar[req;$get[user]]&level=$getUserVar[rank;$get[user]]&rank=%23$getLeaderboardInfo[rank;$get[user];user;top]&text=#FFFF00&avatarborder=&avatarbackground=&bar=#f8d64f&barbackground=#f8d64f&background=hex&border=$getVar[color]&image=url;rank.png]
    $let[user;$authorid]
    $let[username;$usertag]
    $onlyif[$isbot==false;Bots cant have levels dummy]
    $else
$suppresserrors
$attachment[https://api2.nova-bot.tk/rankcard?avatar=$replaceText[$userAvatar[$get[user]];webp;png]&name=$uri[encode;$Usertag[$mentioned[1]];]&exp=$getUserVar[exp;$get[user]]&maxexp=$getUserVar[req;$get[user]]&level=$getUserVar[rank;$get[user]]&rank=%23$getLeaderboardInfo[rank;$get[user];user;top]&text=#FFFF00&avatarborder=$randomText[#58f558;#19e132;#06c2a7;#64e620;#9d8abd;#84f0e9;#bd2095;#29039b;#3a9f60;#b54962;#1c0cb0;#b67c3a;#79e45c;#adcbea;#156f0f]&avatarbackground=&bar=#f8d64f&barbackground=#f8d64f&background=hex&border=&image=url;rank.png]
$let[user;$mentioned[1]]
$let[username;$username[$mentioned[1]]]
$onlyif[$getservervar[levelling]==true;The levelling system is disabled!]
$else
$if[$get[user]==$botownerid]
badges: <:Owner:1016664433596043365> Owner
$attachment[https://api2.nova-bot.tk/rankcard?avatar=$replaceText[$userAvatar[$findmember[$message;yes]];webp;png]&name=$uri[encode;$get[username]]&exp=$getUserVar[exp;$get[user]]&maxexp=$getUserVar[req;$get[user]]&level=$getUserVar[rank;$get[user]]&rank=%23$getLeaderboardInfo[rank;$get[user];user;top]&text=#FFFF00&avatarborder=&avatarbackground=&bar=#f8d64f&barbackground=#f8d64f&background=hex&border=$getVar[color]&image=url;rank.png]
    $let[user;$authorid]
    $let[username;$usertag]
    $onlyif[$isbot==false;Bots cant have levels dummy]
$endif

$if[$authorid==$botownerid]
badges: <:Owner:1016664433596043365> Owner
$attachment[https://api2.nova-bot.tk/rankcard?avatar=$replaceText[$userAvatar[$findmember[$message;yes]];webp;png]&name=$uri[encode;$get[username]]&exp=$getUserVar[exp;$get[user]]&maxexp=$getUserVar[req;$get[user]]&level=$getUserVar[rank;$get[user]]&rank=%23$getLeaderboardInfo[rank;$get[user];user;top]&text=#FFFF00&avatarborder=&avatarbackground=&bar=#f8d64f&barbackground=#f8d64f&background=hex&border=$getVar[color]&image=url;rank.png]
    $let[user;$authorid]
    $let[username;$usertag]
    $onlyif[$isbot==false;Bots cant have levels dummy]
$endif

$endif

$log[[DEBUG] :: $username, used the rank command]`,
};
