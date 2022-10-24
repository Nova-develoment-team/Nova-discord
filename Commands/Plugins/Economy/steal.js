module.exports = {
  name: "steal",
  code: `
    $setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[250;2500]];$authorID]
    $setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$mentioned[1]];$random[250;2500]];$mentioned[1]]
    $setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[75;150]];$authorID]
    $setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]];$mentioned[1]]
    $color[$getServerVar[color]]
    $thumbnail[$userAvatar[$authorID]]
    $title[$username stole from $username[$mentioned[1]]'s bank]
    $description[
    $addField[$username;
    💵 +$$random[1000;2500]
    🗡 +$random[75;150]xp
    Total: $$sum[$getGlobalUserVar[Wallet;$authorID];$random[1000;2500]] | $sum[$getGlobalUserVar[XP;$authorID];$random[75;150]]xp
    ]
    $addField[$username[$mentioned[1]];
    Total: $$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[1000;2500]] | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]]xp
    ]]
    $footer[💵 -$$random[1000;2500] | 🗡 -$random[75;150]xp]
    $globalCooldown[30m;You can steal from someone's bank account again in %time%]
    $onlyIf[$getGlobalUserVar[XP;$authorID]>=1000;You need at least 1,000 XP to steal from someone's bank account]
    $onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=500;They need at least 500 XP to be sapped from!]
    $onlyIf[$getGlobalUserVar[Bank;$mentioned[1]]>=7500;Their bank needs to contain at least $7,500 to be stolen from.]
    $onlyIf[$isBot[$mentioned[1]]!=true;You can't steal from discord bots]
    $onlyIf[$mentioned[1]!=$authorID;You can't rob yourself lol]
    $onlyIf[$mentioned[1]!=;Mention someone to steal from thier bank account. Try this: \`$getServerVar[prefix]steal @user\`]`,
};
