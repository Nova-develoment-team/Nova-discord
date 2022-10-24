module.exports = {
  name: "flip-house",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[125000;150000]];$authorID]
    $setGlobalUserVar[house;$sub[$getGlobalUserVar[house;$authorID];1];$authorID]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[550;650]];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[$getServerVar[color]]
    $title[🏡 Flipped]
    $description[
    Nice job $username! You flipped your house and sold it for a profit!
    ]
    $footer[💵 +$$numberSeparator[$random[125000;150000]] | 🗡 +$random[550;650]xp]
    $globalCooldown[12h;Real estate investors aren't made of money and they can only buy your assets once every 12 hours! Try again in \`%time%\`]
    $onlyIf[$getGlobalUserVar[house;$authorID]>=1;You need to have bought at least 1 \`House\` to flip]`,
};
