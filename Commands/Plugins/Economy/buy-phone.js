module.exports = ({
    name: "buy-phone",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];500];$authorID]
  $setGlobalUserVar[smartphone;$sum[$getGlobalUserVar[smartphone;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>499;Need $500 in your wallet, try withrawing it first]
  $thumbnail[$authorAvatar]
  $color[$getServerVar[color]]
  $title[📱 $username]
  $description[
  Nice! You bought a smartphone for $500!
  ]
  $footer[This item is used to commit a heist]`
  
})