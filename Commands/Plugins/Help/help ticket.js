module.exports = {
  type: "awaitedCommand",
  name: "help-ticket",
  aliases: ["help ticket"],
  usage: ">help ticket",
  code: `$title[<:ticket:912634005470457856> Nova ticket]
$description[Setup ¦ setup the ticket system
Ticket | create a ticket]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the ticket help category command]`,
};
