module.exports = {
  name: "mute",
  code: `$author[$userTag[$findUser[$message[1];no]] has been muted;$userAvatar[$findUser[$message[1];no]]]
      $description[**Moderator:** $userTag[$authorID]
      **Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
      $color[$getRoleColor[$getServerVar[mute;$guildID]]]
      $addTimestamp
      $giveRole[$findUser[$message[1];no];$getServerVar[mute]]
      $onlyIf[$roleExists[$getServerVar[mute;$guildID]]==true;you didn't set the mute role]
   
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1];no]]];the highest role of the user you are trying to mute is higher than my highest role]
   
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findRole[$getServerVar[mute;$guildID]]];my highest role is lower than the mute role]
    $onlyIf[$hasRole[$findUser[$message[1];$getServerVar[mute]]]==false;this user was already muted]
    $argsCheck[>1;❌ **incorrect usage**
    
    ✅ correct usage: unmute @user/ID optional reason]
      $onlyPerms[manageroles;you need \`Manage roles\` permission]
    $onlyBotPerms[manageroles;I need \`Manage roles\` permission]
      $suppressErrors[failed to mute the user]`,
};
