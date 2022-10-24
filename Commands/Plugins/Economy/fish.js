module.exports = {
  name: "fish",
  code: `$color[$getServerVar[color]]
    $setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet];$random[50;100]]]
    $title[$username is fishing]
    $description[You fished a $randomText[🥿;👠;👡;👢;👞;👟;🥾;🦀;🦑;🐙;🦞;🦐;🐠;🐟;🐡;🐬;🦈;🐳;🐋;🐊;🦢;🦆] and you get $random[10;50]xp $$random[50;100]]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$random[10;50]]]
    $globalCooldown[15m;**⏳ You can fish again in %time%**]
    `,
};
