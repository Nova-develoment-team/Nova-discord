module.exports = {
  name: "lavaplay",
  code: `
$description[Playing $lavalinkExecute[songinfo;title] by $lavalinkExecute[songinfo;publisher]]
$color[$GetServerVar[color]]
$lavalinkExecute[connect]
$wait[3s]
$lavalinkExecute[connect]
$lavalinkExecute[play;ytsearch:$message]
$suppressErrors[{title:Error}{description:HCUXrHDekg |\| Song not found}{color:RED}]

$if[$checkContain[https://soundcloud.com]==true]
$description[Playing $lavalinkExecute[songinfo;title] by $lavalinkExecute[songinfo;publisher]]
$color[$GetServerVar[color]]
$lavalinkExecute[connect]
$wait[3s]
$lavalinkExecute[connect]
$lavalinkExecute[play;scsearch:$message]
$suppressErrors[{title:Error}{description:HCUXrHDekg |\| Song not found}{color:RED}]
$endif
`,
};
