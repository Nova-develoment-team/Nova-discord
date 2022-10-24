module.exports = {
  name: "buy-house",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];100000];$authorID]
  $setGlobalUserVar[house;$sum[$getGlobalUserVar[house;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];500];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>=100000;Need $100,000 in your wallet, try withrawing it first.]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=500;You need 500 XP, in which will be deducted after purchase.]
  $thumbnail[$authorAvatar]
  $color[$getServerVar[color]]
  $title[🏡 $username]
  $description[
  Nice! Stepping up! You bought a House for $100,000!
  **500 XP has been deducted!**
  Coming up in the world I see! The real estate business is in high demand and you can make a difference! Try flipping the house to make a profit and earn more XP.
  ]
  $footer[Usage: $getServerVar[prefix]flip-house]`,
};
