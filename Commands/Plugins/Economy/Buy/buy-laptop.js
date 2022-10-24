module.exports = {
  name: "buy-laptop",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];1000];$authorID]
  $setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>999;Need $1,000 in your wallet, try withrawing it first.]
  $thumbnail[$authorAvatar]
  $color[$getServerVar[color]]
  $title[💻 $username]
  $description[
  Nice! You bought a laptop for $1,000!
  ]
  $footer[This item is used to commit a heist]`,
};
