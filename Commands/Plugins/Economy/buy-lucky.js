module.exports = ({
      name: "buy-lucky",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
  $setGlobalUserVar[lucky;$sum[$getGlobalUserVar[lucky;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[Wallet;$authorID]>249;Need $250 in your wallet, try withrawing it first.]
  $thumbnail[$userAvatar[$authorID]]
  $color[$getServerVar[color]]
  $title[Lucky Chest]
  $description[You bought a lucky chest for $250!
  Open it and press your luck for a chance to get the $5,000 lucky pot! Goodluck!
  ]
  $footer[Usage: $getServerVar[prefix]open-lucky]`
  
})