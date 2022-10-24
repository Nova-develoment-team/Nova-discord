module.exports = {
  name: "clear",
  aliases: "purge",
  code: `$author[$userTag[$authorID];$authorAvatar]
    $title[successfully deleted $message[1] $replaceText[$replaceText[$checkCondition[$message[1]>1];true;messages];false;message]]
    $color[$getServerVar[color]]
    $addTimestamp
   
    $clear[$message[1]]
    $onlyIf[$checkContains[$message[1];-]==false;you can use negative numbers, stop trying to break me smh]
    $onlyIf[$message[1]=>1;you can only clear more than 1 message]
    $argsCheck[>1;❌ incorrect usage
    
    ✅ correct usage: clear <number>]
    $onlyPerms[managemessages;you need \`Manage messages\` permission]
    $onlyBotPerms[managemessages;I need \`Manage messages\` permission]

  $suppressErrors[failed to clear the messages]

    $if[$message[1]>150]
    $Onlyif[$getServerVar[premium]==false;{description:You cant go over 150}{color:$getServerVar[color]}]
    $endif

    $If[$message[1]>50]
    $onlyif[$getServerVar[premium]==true;{description:Ah oh! Looks like you don't have premium to go over 50}{color:$getServerVar[color]}]
    $endif`,
};
