module.exports = {
  name: "kick",
  code: `$author[$userTag[$findUser[$message[1];no]] has been kicked;$userAvatar[$findUser[$message[1];no]]
    $description[**Moderator:** $userTag[$authorID]
    **Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
    $color[ffd84d]
    $addTimestamp
    $kick[$findUser[$message[1];no];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
    $onlyIf[$isBanned[$findUser[$message[1];no]]==false;that user is banned from the server]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1];no]]];the highest role of the user you are trying to kick is higher than my highest role]
    $onlyIf[$findUser[$message[1];no]!=$clientID;you can't kick me with myself]
    $onlyIf[$findUser[$message[1];no]!=$authorID;you can't kick yourself]
    $onlyIf[$findUser[$message[1];no]!=$ownerID;you can't kick the owner of the server]
     $argsCheck[1;❌ **incorrect usage**
    
    ✅ correct usage: kick @user/ID optional reason]
     $onlyBotPerms[kick;I need \`Kick\` permission to do this]
    $onlyPerms[ban;you need \`Kick\` permission to do this]
    $suppressErrors[user not found]`,
};
