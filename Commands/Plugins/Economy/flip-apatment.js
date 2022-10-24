module.exports = {
  name: "flip-apartment",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[70000;95000]];$authorID]
    $setGlobalUserVar[apartment;$sub[$getGlobalUserVar[apartment;$authorID];1];$authorID]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[425;525]];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[$getServerVar[color]]
    $title[🏫 Flipped]
    $description[
    Nice job $username! You flipped your apartment and sold it for a profit!
    ]
    $footer[💵 +$$numberSeparator[$random[70000;95000]] | 🗡 +$random[425;525]xp]
    $globalCooldown[12h;Real estate investors aren't made of money and they can only buy your assets once every 12 hours! Try again in \`%time%\`]
    $onlyIf[$getGlobalUserVar[apartment;$authorID]>=1;You need to have bought at least 1 \`Apartment\` to flip]`,
};
