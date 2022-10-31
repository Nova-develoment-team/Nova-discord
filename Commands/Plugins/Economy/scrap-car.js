module.exports = ({
    name: "scrap-car",
    code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[11000;16000]];$authorID]
    $setGlobalUserVar[car;$sub[$getGlobalUserVar[car;$authorID];1];$authorID]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[260;300]];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[$getServerVar[color]]
    $title[🚗 Scrapped]
    $description[
    Nice $username! You scrapped a car for its parts and sold them for a profit!
    ]
    $footer[💵 +$$numberSeparator[$random[11000;16000]] | 🗡 +$random[260;300]xp]
    $globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
    $onlyIf[$getGlobalUserVar[car;$authorID]>=1;You need at least 1 \`Car\` in your inventory to scrap]`
})