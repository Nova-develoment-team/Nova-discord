module.exports = {
  name: "reset",
  code: `$resetGlobalUserVar[Wallet]
    $resetGlobalUserVar[Bank]
    $resetGlobalUserVar[XP]
    $title[Reset]
    $description[Economy has been reset for all guilds]
    $footer[Economy Commands]
    $color[$getServerVar[color]]
    $onlyForIDs[$ownerID;**⛔ You're not the owner of this bot**]`,
};
