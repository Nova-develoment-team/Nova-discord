module.exports = ({
    type: "onGuildJoin",
    channel: "$systemChannelId",
    code: `
    $createSlashCommand[$guildID;play;Play song;song:Support YouTube & Soundcloud:true:3]
$createSlashCommand[$guildID;filter;For list, just leave blank;filter:Use FIlter:false:3]
$createSlashCommand[$guildID;resume;Resume Song]
$createSlashCommand[$guildID;pause;Pause Song]
$createSlashCommand[$guildID;stop;Stop Song]
$createSlashCommand[$guildID;afk;Set yourself as afk!;reason:Let them know why your afk:true:3]
$createSlashCommand[$guildID;avatar;get someones avatar and be weired?;user:Get a users avatar:true:9]
$createSlashCommand[$guildID;prefix;change bot prefix to something custom;prefix:Change bot prefix:true:3]
$createSlashCommand[$guildID;ping;Check bot ping]
$createSlashCommand[$GuildID;stats;Look at the bots stats ig]
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$title[👋 Hello there i am Nova]
$description[I am Nova. I think we diden't have a proper introduction!
I am Nova! i have $commandsCount, i have many categorys my prefix is  \`\`$getServerVar[prefix]\`\ use >help to see my commands
Heres my help menu if your intrested:

$addfield[<a:NewMail:916990093049360394> ModMail [$getServerVar[prefix]help modmail];
    <:reply:980147502529523752> Search for modmail commands;yes]

    $addfield[📈 Leveling [$getServerVar[prefix]help leveling];
    <:reply:980147502529523752> Search for leveling commands;yes]

    $addfield[<a:tadablue:904718144663322669> Giveaway [$getServerVar[prefix]help giveaway];
    <:reply:980147502529523752> Search for giveaway commands;yes]

    $addfield[🎵 Music [$getServerVar[prefix]help music];
    <:reply:980147502529523752> Search for music commands;yes]

    $addfield[💰 Economy [$getServerVar[prefix]help economy];
    <:reply:980147502529523752> Search for economy commands;yes]

    $addfield[⚙️ Utility [$getServerVar[prefix]help utility];
    <:reply:980147502529523752> Search for utility commands;yes]

    $addfield[:flushed: [$getServerVar[prefix]help nsfw];
    <:reply:980147502529523752> Search for nsfw commands;yes]

    $addfield[<a:fun:910546867962642463> Fun [$getServerVar[prefix]help fun];
    <:reply:980147502529523752> Search for fun commands;yes]

    $addfield[<:s_invite:960755956449415168> Invite [$getServerVar[prefix]help invite];
    <:reply:980147502529523752> Search for invite commands;yes]

    $addfield[😁 Reaction roles [$getServerVar[prefix]help reaction];
    <:reply:980147502529523752> Search for reaction commands;yes]

    $addfield[:robot: Auto moderation [$getServerVar[prefix]help automod];
    <:reply:980147502529523752> Search for automod commands;yes]

    $addfield[<:moderation:905787390302490624> Moderation [$getServerVar[prefix]help mod];
    <:reply:980147502529523752> Search for moderation commands;yes].
    I was made by Duckey | Nova dev#4200. You can access my dashboard [here](https://dashboard.nova-bot.tk)
]
$color[BLUE]
$channelSendMessage[966700897491120249;{title: New server!}{description: i joined a server heres there info:}{field:GuildId:$guildid}{field:Invite:$getServerInvite}{color:BLUE}]
`}) 