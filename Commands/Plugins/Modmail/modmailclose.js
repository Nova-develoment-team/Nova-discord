module.exports = {
  name: "modMailClose",
  code: `
Modmail closed
$setServerVar[modMailUserID;]
$setGlobalUserVar[channelid;]
$setGlobalUserVar[isModmail;false;$getServerVAr[modMailUserID]]
$sendDm[$getServerVAr[modMailUserID]; Modmail ticket is now closed]
$onlyperms[manageserver;<a:failed:947763053938757682> Not enough permissions! You need manage server permissions to execute this!]
$onlyif[$getGlobalUserVar[isModmail]==true;{description:<a:failed:947763053938757682> there are no modmail sessions}{color:RED}]

$log[[DEBUG] :: $username, closed a modmail session in $serverName]`,
};
