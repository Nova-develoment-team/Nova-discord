module.exports = {
  name: "reboot",
  code: `$if[$message[1]==]
$description[) reboot --normal
> Reboot

) reboot --destroy
> Reboot Instantly Turn Off]
$color[$getServerVar[color]]
$addTimestamp
$elseIf[$toLowercase[$message[1]]==--normal]
$exec[pm2 restart Nova]
$wait[40ms]
$addCmdReactions[✅]
$endelseif
$elseIf[$toLowercase[$message[1]]==--destroy]
$exec[pm2 stop Nova]
$wait[40ms]
$addCmdReactions[✅]
$endelseif
$elseIf[$toLowercase[$message[1]]==-n]
$exec[pm2 restart Nova]
$wait[40ms]
$addCmdReactions[✅]
$endelseif
$elseIf[$toLowercase[$message[1]]==-d]
$exec[pm2 stop Nova]
$wait[40ms]
$addCmdReactions[✅]
$endelseif
$endif
$onlyIf[$checkContains[$botOwnerID;$authorID]!=false;]`,
};
