module.exports = {
  name: "modmailSend",
  code: `$sendDm[$getServerVAr[modMailUserID];{title:Staff team}{description:$message}{color:$getServerVar[color]}]
    $title[<a:success:947763162705428491> Sent to $usertag[$getServerVar[modMailUserID]]]
    $description[You sent: $message ]
    $footer[To close the mod mail do >modmailclose]
    $color[GREEN]
    $onlyif[$getGlobalUserVar[isModmail]==true;{description:<a:failed:947763053938757682> there are no modmail sessions}{color:RED}]
    
    $log[[DEBUG] :: $username, sent a modmail message to $usertag[$getServerVar[modMailUserID]] in $serverName. Message: $message]`,
};
