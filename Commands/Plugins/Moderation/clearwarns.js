module.exports = {
  name: "clearwarns",
  code: `$author[$userTag[$authorID];$userAvatar[$authorID]]
      $title[$message[last] warnings cleared from $userTag[$findUser[$message[1];no]]]
      $description[]
      $addTimestamp
      $onlyIf[$isBot[$findUser[$message[1];no]]==false;Bots cannot have warnings]
      $onlyIf[$findUser[$message[1];no]!=$ownerID;the server owner cannot have warnings]
      $onlyPerms[kick;you need \`Kick\` permission]
      $onlyIf[$isNumber[$message[last]]==true;please write a valid number of warnings to clean from the user]
      $onlyIf[$getUserVar[warn;$findUser[$message[1]]]<=$message[last];the user does not have that amount of warnings to clean]
      $onlyIf[$checkContains[$message[last];-]==false;please write a valid **positive number** of warnings to clean from the user]
        $setUserVar[warn;$sub[$getUserVar[warn;$findUser[$message[1];no]];$message[last]];$findUser[$message[1];no]]
      $argsCheck[>1;❌ **incorrect usage**
     
      ✅ correct usage: clearwarnings @user/ID (number)]
      $argsCheck[>2;❌ **incorrect usage**
     
      ✅ correct usage: clearwarnings @user/ID (number)]
      $suppressErrors[failed to clear the warnings]`,
};
