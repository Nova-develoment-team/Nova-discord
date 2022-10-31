module.exports = ({
    name: "scrap-helicopter",
    code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[22000;29000]];$authorID]
    $setGlobalUserVar[helicopter;$sub[$getGlobalUserVar[helicopter;$authorID];1];$authorID]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[360;435]];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[$getServerVar[color]]
    $title[🚁 Scrapped]
    $description[
    Nice $username! You scrapped a helicopter for its parts and sold them for a profit!
    ]
    $footer[💵 +$$numberSeparator[$random[22000;29000]] | 🗡 +$random[360;435]xp]
    $globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
    $onlyIf[$getGlobalUserVar[helicopter;$authorID]>=1;You need at least 1 \`Helicopter\` in your inventory to scrap]`
   
})