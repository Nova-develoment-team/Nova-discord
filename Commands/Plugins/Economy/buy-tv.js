module.exports = ({
    name: "buy-tv",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];400];$authorID]
  $setGlobalUserVar[tv;$sum[$getGlobalUserVar[tv;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>399;Need $400 in your wallet, try withrawing first]
  $thumbnail[$authorAvatar]
  $color[$getServerVar[color]]
  $title[📺 $username]
  $description[
  Nice! You bought a TV for $400!
  ]
  $footer[This item is used to commit a heist]`
  
})