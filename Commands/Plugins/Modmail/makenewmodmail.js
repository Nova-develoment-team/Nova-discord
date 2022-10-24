module.exports = {
  name: "modmail",
  code: `
    $sendDm[$authorId;{title:Hello!}{description:Do you have a problem in $servername? Do >sendModmail to send a message to the mods}{color:$getServervar[color]}]
    $setServerVar[modMailUserID;$authorID]
    $setGlobalUserVar[channelid;$getServerVar[modmail_channel]]
    $setGlobalUserVar[isModmail;true]
    $channelSendMessage[$getServerVar[modmail_channel];{description:<@&$getServerVar[modmail_modRoleID]> <@&$getServerVar[modmail_adminRoleID]> New modmail \n userid: $authorID \n username: $username \n \n do >modmailSend to send to the user}{color:$getServerVAr[color]}]
    $username pls check your dms
    
    $onlyif[$GetGlobaluservar[isModmail]==false;{description:<a:failed:947763053938757682> there is already a modmail sessions}{color:RED}]
    $onlyif[$getservervar[modmail_setup]==true;<a:failed:947763053938757682> Mod mail is not setup yet!]
    $log[[DEBUG] :: $username, made a modmail session]`,
};
