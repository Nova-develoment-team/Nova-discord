module.exports = ({
    name: "buy-spiteful",
    code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];1000];$authorID]
    $setGlobalUserVar[spiteful;$sum[$getGlobalUserVar[spiteful;$authorID];1];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[$getServerVar[color]]
    $title[Spiteful Chest]
    $description[You bought a Spiteful chest for $1,000!
    **Open it and see what you find!
    Just be warned! It could be spiteful, Goodluck!**
    ]
    $footer[Usage: $getServerVar[prefix]open-spiteful]
    $onlyIf[$getGlobalUserVar[Wallet;$authorID]>999;Need $1,000 in your wallet, try withrawing it first]`
    
})