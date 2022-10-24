module.exports = {
  name: "setmuterole",
  aliases: "setmute",
  code: `$author[$userTag[$authorID];$userAvatar[$authorID]]
    $description[the <@&$findRole[$message[1]]> role has been established as a mute role]
    $color[$getRoleColor[$findRole[$message[1]]]]
    $addTimestamp
    $setServerVar[mute;$findRole[$message[1]];$guildID]
    $onlyIf[$roleExists[$findRole[$message[1]]]==true;that role doesn't exist]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findRole[$message[1]]];my highest role is lower than the role you choose]
    $onlyPerms[manageroles;you need \`Manage roles\` permission]
    $onlyBotPerms[manageroles;I need \`Manage roles\` permission]
    $suppressErrors[role not found]`,
};
