module.exports = {
  name: "meme",
  code: `$title[$jsonRequest[https://api.nova-bot.tk/fun/meme;title]]
$image[$jsonRequest[https://api.nova-bot.tk/fun/meme;image]]
$footer[Upvotes: $jsonRequest[https://api.nova-bot.tk/fun/meme;upvotes]]
$color[$GetServervar[color]]

$log[[DEBUG] :: $username, used the meme command]
`,
};
