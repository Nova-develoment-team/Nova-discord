module.exports = {
  name: "daily",
  code: `$setGlobalUserVar[DailyChest;$sum[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]
  $thumbnail[$userAvatar[$authorID]]
  $color[$getServerVar[color]]
  $title[Daily Chest]
  $description[
  Congrats $username! You received 1 daily chest!
  This action can be done once every 12 hours.
  ]
  $footer[To open use, $getServerVar[prefix]open-daily]
  $onlyIf[$getGlobalUserVar[DailyChest;$authorID]<1;**You still have an unopened daily chest in your inventory. Open it for room to receive another chest.** \`$getServerVar[prefix]open-daily\`]
  $globalCooldown[12h;**⛔ Please wait %time% before you can claim another daily chest!**]`,
};
