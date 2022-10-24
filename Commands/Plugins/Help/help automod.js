module.exports = {
  type: "awaitedCommand",
  name: "help-automod",
  aliases: ["help mod"],
  usage: ">help mod",
  code: `$title[:robot: Nova auto moderation]
    $description[
    enable-antiSwear ¦ Enable antiswear
    disable-antiSwear ¦ Disable antiswear]
    $color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the automod help category command]`,
};
