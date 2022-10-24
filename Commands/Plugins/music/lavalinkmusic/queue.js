module.exports = {
  name: "lavaqueue",
  code: `$description[
$addfield[Lavalink node;Node VhU3AQ-r7actKWD3-2Xza2-fSxYqBQ]
$addfield[Tracks;$lavalinkExecute[queue;**title** \n {title} \n **author** \n {publisher} \n **url** \n [{title}]({url}) \n]]
]
$suppresserrors[{title:Error}{description:rDOSPVcSFK || No songs in queue}{color:RED}]
$color[$getServerVar[color]`,
};
