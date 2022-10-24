module.exports = {
  name: "unmute",
  code: `$author[$userTag[$findUser[$message[1];no]] has been unmuted;$userAvatar[$findUser[$message[1];no]]]
      $description[**Moderator:** $userTag[$authorID]
      **Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
      $color[$getRoleColor[$getServerVar[mute;$guildID]]]
      $addTimestamp
      $takeRole[$findUser[$message[1];no];$getServerVar[mute]]
   
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1];no]]];the highest role of the user you are trying to unmute is higher than my highest role]
   
  $onlyIf[$hasRole[$findUser[$message[1];no];$getServerVar[mute]]==true;this user is not muted]
    $onlyIf[$roleExists[$getServerVar[mute;$guildID]]==true;you didn't set the mute role]
      $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findRole[$getServerVar[mute;$guildID]]];my highest role is lower than the mute role]
      $argsCheck[>1;❌ **incorrect usage**
    
    ✅ correct usage: unmute @user/ID optional reason]
  $onlyPerms[manageroles;you need \`Manage roles\` permission]
    $onlyBotPerms[manageroles;I need \`Manage roles\` permission]
      $suppressErrors[failed to unmute the user]`,
};
