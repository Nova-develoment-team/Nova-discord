module.exports = {
  name: "setup",
  code: `
$if[$message[1]==]
$description[What would you like to do? \n \n 
> ) >setup settings \n
> ) >setup ticket \n
> ) >setup modmail \n 
> ) >setup (enable/disable) levelling
> ) >setup (enable/disable) antiswear]

$elseif[$message[1]==settings]
> Ticket: $replacetext[$replacetext[$getServerVar[ticketsetup];true;<:enabled:1019240973898879047>];false;<:disabled:1019240968635043892> ]
> Modmail: $replacetext[$replacetext[$getServerVar[modmail_setup];true;<:enabled:1019240973898879047>];false;<:disabled:1019240968635043892> ]
> AntiSwear: $replacetext[$replacetext[$getServerVar[antiSwear];true;<:enabled:1019240973898879047>];false;<:disabled:1019240968635043892> ]
> Levelling: $replacetext[$replacetext[$getServerVar[levelling];true;<:enabled:1019240973898879047>];false;<:disabled:1019240968635043892> ]
$endelseif
$elseIf[$message[1]==ticket]
$awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
$sendMessage[**Which Category Do you want to make For Ticket System.
Provide the Category ID. 
This Command will be cancelled after** \`30 seconds\`.;no]
$onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
$suppressErrors[]
$endelseif
$elseIf[$message[1]==modmail]
$awaitMessages[$authorID;30s;everything;modmailsetup;Too slow! Pls run again]
Pls respond with the following: mod role id, admin role id, channel where you want it to send
$endelseif
$elseIf[$message[1]==enable-antiSwear]
$description[<:success:935751098092884020> successfully enabled the antiSwear plugin]
    $color[$GetServervar[color]]
    $setServerVar[antiSwear;true]
    $onlyIf[$getServerVar[antiSwear]==false;{description:<:error:935750920598351872> AntiSwear plugin already enabled}{color:$GetServervar[color]}]
    $onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:$GetServervar[color]}
    
    $log[[DEBUG] :: $username, used the enable-AntiSwear command]
$endelseIf
$elseIf[$message[1]==disable-antiSwear]
$description[<:success:935751098092884020> successfully disabled the antiSwear plugin]
    $color[$GetServervar[color]]
    $setServerVar[antiSwear;false]
    $onlyIf[$getServerVar[antiSwear]==true;{description:<:error:935750920598351872> AntiSwear plugin already Disable}{color:$GetServervar[color]}]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:$GetServervar[color]}]

$log[[DEBUG] :: $username, used the disable-antiswear command]
$endelseif
$elseif[$message[1]==disable-levelling]
$description[<:success:935751098092884020> successfully disabled the levelling plugin]
    $color[#2f3136]
    $setServerVar[levelling;false]
    $onlyIf[$getServerVar[levelling]==true;{description:<:error:935750920598351872> levelling plugin already Disable}{color:#2f3136}]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:#2f3136}]

$log[[DEBUG] :: $username, disabled levelling for some reason in $servername 🤷‍♂️]
$endelseif
$elseif[$Message[1]==enable-levelling]
$description[<:success:935751098092884020> successfully enabled the levelling plugin]
    $color[$GetServervar[color]]
    $setServerVar[levelling;true]
    $onlyIf[$getServerVar[levelling]==false;{description:<:error:935750920598351872> levelling plugin already enabled}{color:$GetServervar[color]}]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:$GetServervar[color]}]
   
$log[[DEBUG] :: $username, enabled levelling in $serverName]
$endelseif
$endif
`,
};
