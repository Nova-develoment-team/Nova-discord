module.exports = {
  name: "gay",
  code: `$title[Gay meter]
$description[<@$authorid> is **$jsonRequest[https://api.nova-bot.tk/fun/gay?key=7122011;response]**]
$color[$GetServervar[color]]

$log[[DEBUG] :: $username, used the gay command]
`,
};
