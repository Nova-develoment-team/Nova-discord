module.exports = {
  name: "fish",
  code: `$color[$getServerVar[color]]
    $setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet];$random[50;100]]]
    $title[$username is fishing]
    $description[You fished a $randomText[ðĨŋ;ð ;ðĄ;ðĒ;ð;ð;ðĨū;ðĶ;ðĶ;ð;ðĶ;ðĶ;ð ;ð;ðĄ;ðŽ;ðĶ;ðģ;ð;ð;ðĶĒ;ðĶ] and you get $random[10;50]xp $$random[50;100]]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$random[10;50]]]
    $globalCooldown[15m;**âģ You can fish again in %time%**]
    `,
};
