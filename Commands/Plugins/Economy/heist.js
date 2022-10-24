module.exports = {
  name: "heist",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[4800;7600]];$authorID]
  $setGlobalUserVar[laptop;$sub[$getGlobalUserVar[laptop;$authorID];1];$authorID]
  $setGlobalUserVar[smartphone;$sub[$getGlobalUserVar[smartphone;$authorID];1];$authorID]
  $setGlobalUserVar[duffle;$sub[$getGlobalUserVar[duffle;$authorID];1];$authorID]
  $setGlobalUserVar[tv;$sub[$getGlobalUserVar[tv;$authorID];1];$authorID]
  $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[20;42]];$authorID]
  $color[00ff00]
  $thumbnail[$userAvatar[$authorID]]
  $title[Heist]
  $description[$username, you used a \`Laptop\` to hack the security system in your favor, a rooted \`Smartphone\` to shut down the cameras and used the \`TV\` screen to monitor surveillance while you fill your \`Bag\` with a buttload of cash and then tossed the contraband $randomText[in a lake!;over a bridge!;down a storm drain!;in separate dumpsters around town!;in the bed of a random truck!;on a roof!;in a ditch!]
  ]
  $footer[💵 +$$numberSeparator[$random[4800;7600]] | 🗡 +$random[20;42]]
  $onlyIf[$getGlobalUserVar[laptop;$authorID]>=1;Missing laptop. Try working for it and buying one first.]
  $onlyIf[$getGlobalUserVar[smartphone;$authorID]>=1;Missing smartphone. Try working for it and buying one first.]
  $onlyIf[$getGlobalUserVar[duffle;$authorID]>=1;Missing bag. Try working for it and buying one first.]
  $onlyIf[$getGlobalUserVar[tv;$authorID]>=1;Missing TV. Try working for it and buying one first.]
  $onlyIf[$getGlobalUserVar[XP;$authorID]>=300;You need at least 300 XP to commit a heist! \`XP will not be deducted and is only needed as a requirement!\`]
  $globalCooldown[3h;Wait %time% until you can launch another heist!]`,
};
