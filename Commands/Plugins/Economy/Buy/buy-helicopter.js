module.exports = {
  name: "buy-helicopter",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];20000];$authorID]
  $setGlobalUserVar[helicopter;$sum[$getGlobalUserVar[helicopter;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];350];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>=20000;Need $20,000 in your wallet, try withrawing it first]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=350;You need 350 XP, in which will be deducted after purchase.]
  $thumbnail[$authorAvatar]
  $color[$getServerVar[color]]
  $title[🚁 $username]
  $description[
  Nice! You bought a Helicopter for $20,000!
  **350xp has been deducted!**
  You can strip it for parts to scrap for more money and XP.
  ]
  $footer[Usage: $getServerVar[prefix]scrap-helicopter]`,
};
