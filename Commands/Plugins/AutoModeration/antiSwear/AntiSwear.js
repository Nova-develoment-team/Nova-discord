module.exports = {
  name: "$alwaysExecute",
  code: `
$senDdm[$authorId;{description: You have been warned in $servername || Reason: Nova auto-moderation, saying the banned word: $Message, If you think this was an error pls dm the staff in $servername}{color:RED}]
$setUserVar[warn;$sum[$getUserVar[warn];1]]
$log[[DEBUG] :: $username Swore in $servername :: Warned user for the $getUserVar[warn]th time
$description[Don't say badwords]
$color[$GetServervar[color]]
$deleteCommand
$deleteMessage[$channelId;$messageID;3s]
$onlyIf[$checkContains[$message;fuck;shit;bitch;dick;cock;cunt;dick head;fuck you;fucked;ass;hore;hoe;Fuck;Shit;Bitch;Dick;Cock;Cunt;Dick Head;Fuck You;Fucked;Ass;Hore;Hoe;FUCK;SHIT;BITCH;DICK;COCK;CUNT;DICK HEAD;FUCK YOU;FUCKED;ASS;HORE;HOE;FuCk;sHiT;BiTcH;DiCk;cOcK;CuNt;dIcK HeAd;fUcK YoU;FuCkEd;aSs;hOrE;HoE;FuCk;sHiT;BiTcH;DiCk;cOcK;CuNt;dIcK HeAd;fUcK YoU;FuCkEd;aSs;hOrE;HoE;nigger,]==true;]
$onlyIf[$getServerVar[antiSwear]==true;]
`,
};
