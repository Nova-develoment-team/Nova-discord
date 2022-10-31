module.exports = ({
    name: "buy-car", 
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];10000];$authorID]
  $setGlobalUserVar[car;$sum[$getGlobalUserVar[car;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];250];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>=10000;Need $10,000 in your wallet, try withrawing it first.]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=250;You need 250 XP, in which will be deducted after purchase.]
  $thumbnail[$authorAvatar]
  $color[$getServerVar[color]]
  $title[🚗 $username]
  $description[
  Nice! You bought a Car for $10,000!
  **250xp has been deducted!**
  You can strip it for parts to scrap for more money and XP.
  ]
  $footer[Usage: $getServerVar[prefix]scrap-car]`
  
})