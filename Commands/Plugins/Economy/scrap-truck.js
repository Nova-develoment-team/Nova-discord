module.exports = ({
    name: "scrap-truck",
    code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[16500;22000]];$authorID]
    $setGlobalUserVar[truck;$sub[$getGlobalUserVar[truck;$authorID];1];$authorID]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[310;380]];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[$getServerVar[color]]
    $title[🚚 Scrapped]
    $description[
    Nice $username! You scrapped a truck for its parts and sold them for a profit!
    ]
    $footer[💵 +$$numberSeparator[$random[16500;22000]] | 🗡 +$random[310;380]xp]
    $globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
    $onlyIf[$getGlobalUserVar[truck;$authorID]>=1;You need at least 1 \`Truck\` in your inventory to scrap]`
})