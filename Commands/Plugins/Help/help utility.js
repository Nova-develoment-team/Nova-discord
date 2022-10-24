module.exports = {
  type: "awaitedCommand",
  name: "help-utility",
  code: `$title[⚙️ Nova utilitys]
$description[
avatar ¦ shows a users avatar
commandlist ¦ aoi.js functions
whois ¦ check a memeber
invite ¦ invite me
ping ¦ check the ping of the bot
prefix ¦ change the prefix of the bot
quote ¦ Quote a message
editsnipe ¦ Check edited messages
snipe ¦ Snipe recently deleted messages
addemoji ¦ Add an emoji
afk ¦ set a afk status
add-cmd ¦ Add a custom command
del-cmd ¦ Delete custom command
cmd-list ¦ See custom commands]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the utility help category command]`,
};
