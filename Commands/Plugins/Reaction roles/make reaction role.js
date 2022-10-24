module.exports = {
  name: "rrole",
  code: `
$reactionCollector[$botLastMessageID;$authorID;1h;$message[2];rrole;yes]
    $setServerVar[rr;$mentionedRoles[1]]
    $textSplit[$sendMessage[
    {title: Role}
    {description: Select $message[2] reactions to get role}
    <@$mentionedRoles[1]>
    {color:#2f3136}
    {footer:Nova rocks};yes];]
    $onlyIf[$mentionedRoles[1]!=; Error! Correct usage: <@role> <emote>]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:#2f3136}`,
};
