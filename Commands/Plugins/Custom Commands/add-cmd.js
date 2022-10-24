module.exports = {
  name: "add-cmd",
  code: `
  $setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
  $setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
  Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cmd-list\` to see all available commands
  $onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:ff2050}]
  $textsplit[$getservervar[ccmd];/]
  $onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
  $argscheck[>2;{description:Correct use\n\`\`\`\n$getservervar[prefix]add-cmd <trigger> <response>\n\`\`\`}{color:ff2050}]
  $onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]

$onlyif[$getServerVar[premium]==true;<:NovaPremium:1016662006297800827> Oh no. This server doesn't have premium, help this server by buying a key and activating premium!]
  `,
};
