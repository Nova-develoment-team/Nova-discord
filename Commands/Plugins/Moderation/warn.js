module.exports = {
  name: "warn",
  code: `$author[$userTag[$findUser[$message[1];no]] has been warned;$userAvatar[$findUser[$message[1];no]]]
    $title[**Moderator:** $userTag[$authorID]]
    $description[**Reason:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]]
    $color[$getServerVar[color]]
    $addTimestamp
    $setUserVar[warn;$sum[$getUserVar[warn;$findUser[$message[1];no]];1];$findUser[$message[1];no]]
    $onlyIf[$isBot[$findUser[$message[1];no]]==false;you can't warn bots]
    $onlyIf[$findUser[$message[1];no]!=$ownerID;you can't warn the owner of the server]
    $onlyIf[$findUser[$message[1];no]!=$authorID;you can't warn yourself]
    $argsCheck[>1;❌ **incorrect usage**
    
    ✅ correct usage: warn @user/ID optional reason]
    $onlyPerms[kick;you need \`Kick\` permission]
    $suppressErrors[user not found]`,
};
