module.exports = {
  type: "awaitedCommand",
  name: "help-levelling",
  code: `
$title[📈 Nova levels]
$description[set-level-channel ¦ set a level channel.
level-message ¦ make a level up message!
level-role ¦ set a level role.
rank ¦ show your rank our someones.
set-card ¦ set your rank background
enable-levelling ¦ enable levelling
disable-levelling ¦ disable levelling]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the levelling help category command]`,
};
