module.exports = ({
    name: "buy-apartment",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];50000];$authorID]
  $setGlobalUserVar[apartment;$sum[$getGlobalUserVar[apartment;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];400];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>=50000;Need $50,000 in your wallet, try withrawing it first.]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=400;You need 400 XP, in which will be deducted after purchase.]
  $thumbnail[$authorAvatar]
  $color[$getServerVar[color]]
  $title[🏫 $username]
  $description[
  Nice! Stepping up! You bought an Apartment for $50,000!
  **400xp has been deducted!**
  The real estate business is in high demand and you can make a difference! Try flipping the apartment to make a profit and earn more XP.
  ]
  $footer[Usage: $getServerVar[prefix]flip-apartment]`
  
})