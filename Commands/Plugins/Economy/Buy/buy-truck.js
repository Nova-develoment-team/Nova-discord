module.exports = {
  name: "buy-truck",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];15000];$authorID]
    $setGlobalUserVar[truck;$sum[$getGlobalUserVar[truck;$authorID];1];$authorID]
    $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];300];$authorID]
    $onlyIf[$getGlobalUserVar[Wallet;$authorID]>=15000;Need $15,000 in your wallet, try withrawing it first]
    $onlyIf[$getGlobalUserVar[XP;$authorID]>=300;You need 300 XP, in which will be deducted after purchase]
    $thumbnail[$authorAvatar]
    $color[$getServerVar[color]]
    $title[🚚 $username]
    $description[
    Nice! You bought a Truck for $15,000!
    **300xp has been deducted!**
    You can strip it for parts to scrap for more money and XP.
    ]
    $footer[Usage: $getServerVar[prefix]scrap-truck]`,
};
