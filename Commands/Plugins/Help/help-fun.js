module.exports = {
  type: "awaitedCommand",
  name: "help-fun",
  aliases: ["help fun"],
  code: `
  $editMessage[{title:<a:fun:910546867962642463> Nova fun}{description:
guess ¦ Play guess the number
hack ¦ Hack a user
jumbo ¦ Enlarge an emote
8ball ¦ Ask the 8ball questions}{color:$getServerVar[color]}
$log[[DEBUG] :: $username, used the fun help category command]
`,
};
