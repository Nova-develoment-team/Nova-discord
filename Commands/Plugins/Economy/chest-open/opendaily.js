module.exports = {
  name: "open-daily",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
    $setGlobalUserVar[DailyChest;$sub[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];15];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[$getServerVar[color]]
    $title[Daily Chest]
    $description[$username, you opened your Daily Chest!
    ]
    $footer[💵 +$250 | 🗡 +15xp]
    $onlyIf[$getGlobalUserVar[DailyChest;$authorID]==1;**⛔ You dont have a Daily Chest yet! Try using \`$getServerVar[prefix]daily\` to receive your Daily Chest and then run this command to open it**]
    `,
};
