module.exports = {
  name: "modmailsetup",
  type: "awaitedCommand",
  code: `
    
    <a:success:947763162705428491> Success! You setup your modMail.
    $setservervar[modmail_channel;$message[3]]
    $setServervar[modmail_setup;true]
    $setServerVar[modmail_modRoleID;$message[1]]
    $setServerVar[modmail_adminRoleID;$message[2]]

    $onlyif[$message[3]!=;Ah oh! you have to mention a channel id! not mention a channel"]
    $onlyif[$message[1]!=0;<a:failed:947763053938757682> Could not find the role!]
    $onlyif[$message[2]!=0;<a:failed:947763053938757682> Could not find the role!]
    $onlyperms[manageserver;<a:failed:947763053938757682> Not enough permissions! You need manage server permissions to execute this!]

    $log[[DEBUG] :: $username, setted up Modmail in $serverName]
    $onlyif[$getServerVar[premium]==true;You need to be a premium user to use this command!]
    $Onlyif[$getServerVar[modmail_setup]==false;Modmails alredy setup]
    `,
};
