module.exports = {
  name: "ban",
  code: `$author[$userTag[$findUser[$message[1];no]] has been banned;$userAvatar[$findUser[$message[1];no]]
    $description[**Moderator:** $userTag[$authorID]
    **Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
    $color[FF0000]
    $addTimestamp
    $ban[$findUser[$message[1];no];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
    $onlyIf[$findUser[$message[1];no]!=$authorID;you can't ban yourself]
    $onlyIf[$findUser[$message[1];no]!=$ownerID;you can't ban the owner of the server]
    $onlyIf[$isBanned[$findUser[$message[1];no]]==false;that user was already banned from the server]
    $onlyIf[$findUser[$message[1];no]!=$clientID;you can't ban me with myself]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1];no]]];the highest role of the user you are trying to ban is higher than my highest role]
    $argsCheck[1;Invalid command usage, try using it like:
  ban [member] (optional reason)
   
  Example:
  ban @user/ID optional reason]
    $onlyBotPerms[ban;I need \`Ban\` permission to do this]
    $onlyPerms[ban;you need \`Ban\` permission to do this]
    $suppressErrors[user not found]
    $sendDM[$findUser[$message[1]];{author:You have been banned from $serverName}{description:**Moderator:** $userTag[$authorID]]
      $sendchannelmessage[$getServerVar[modlogschannel];{description:$author[$userTag[$findUser[$message[1];no]] was banned for  $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]] by: $usertag[$authorId]}]
  
      $onlyIf[$getServerVar[modlogSetup]==true;]
      $onlyIf[$getServerVar[modlogsEnabled]==true;]
  **Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]}`,
};
