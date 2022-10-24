module.exports = {
  name: "warns",
  code: `$author[$userTag[$findUser[$message[1];no]];$userAvatar[$findUser[$message[1];no]]]
    $title[Have: $getUserVar[warn;$findUser[$message[1]]] infractions]
    $description[]
    $addTimestamp
    $onlyIf[$isBot[$findUser[$message[1];no]]==false;Bots cannot have warnings]
    $onlyIf[$findUser[$message[1];no]!=$ownerID;the server owner cannot have warnings]
    $argsCheck[>1;❌ **incorrect usage**
    
    ✅ correct usage: infractions @user/ID]
    $suppressErrors[user not found]`,
};
