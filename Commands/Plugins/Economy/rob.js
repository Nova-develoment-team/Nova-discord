module.exports = {
  name: "rob",
  code: `
    $setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]];$authorID]
    $setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]];$mentioned[1]]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[50;75];$authorID]]
    $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]];$mentioned[1]]
    $color[$getServerVar[color]]
    $thumbnail[$userAvatar[$authorID]]
    $title[$username robbed $username[$mentioned[1]]]
    $description[
    $addField[$username;
    💵 +$$random[0;750]
    🗡 +$random[50;75]xp
    Total: $$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]] | $sum[$getGlobalUserVar[XP;$authorID];$random[50;75]]xp
    ]
    $addField[$username[$mentioned[1]];
    Total: $$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]] | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]]xp
    ]]
    $footer[💵 -$$random[0;750] | 🗡 -$random[50;75]xp]
    $globalCooldown[15m;You can rob someone again in %time%]
    $onlyIf[$getGlobalUserVar[Wallet;$authorID]>=750;Your wallet needs to contain at least $750 to rob someone.]
    $onlyIf[$getGlobalUserVar[XP;$authorID]>=75;You need at least 75xp to rob someone.]
    $onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=25;They need at least 25xp]
    $onlyIf[$getGlobalUserVar[Wallet;$mentioned[1]]>=750;Their wallet needs to contain at least $750]
    $onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't rob discord bots**]
    $onlyIf[$mentioned[1]!=$authorID;**⛔ You can't rob yourself**]
    $onlyIf[$mentioned[1]!=;**⛔ Mention someone to rob**]`,
};
