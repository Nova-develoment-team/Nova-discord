module.exports = ({
    name: "buy-mansion",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];500000];$authorID]
  $setGlobalUserVar[mansion;$sum[$getGlobalUserVar[mansion;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];750];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>=500000;Need $500,000 in your wallet, try withrawing it first]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=750;You need 750 XP, in which will be deducted after purchase]
  $thumbnail[$userAvatar[$authorID]]
  $color[$getServerVar[color]]
  $title[🏰 $username]
  $description[
  Nice! You bought a Mansion for $500,000!
  **750 XP has been deducted!**
  Now you're just showing off and living it up lol! Try flipping the mansion to make a profit and earn more XP.
  ]
  $footer[Usage: $getServerVar[prefix]flip-mansion]`
})