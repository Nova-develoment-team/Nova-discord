module.exports = {
  name: "slash",
  code: `$createSlashCommand[$guildID;play;Play song;song:Support YouTube & Soundcloud:true:3]
$createSlashCommand[$guildID;filter;For list, just leave blank;filter:Use FIlter:false:3]
$createSlashCommand[$guildID;resume;Resume Song]
$createSlashCommand[$guildID;pause;Pause Song]
$createSlashCommand[$guildID;stop;Stop Song]
$createSlashCommand[$guildID;afk;Set yourself as afk!;reason:Let them know why your afk:true:3]
$createSlashCommand[$guildID;avatar;get someones avatar and be weired?;user:Get a users avatar:true:9]
$createSlashCommand[$guildID;prefix;change bot prefix to something custom;prefix:Change bot prefix:true:3]
$createSlashCommand[$guildID;ping;Check bot ping]
$createSlashCommand[$GuildID;stats;Look at the bots stats ig]
$title[Successfully created]
$description[You can use slash command now.] $color[$getVar[color]]
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[3s;Please wait **%time%** before using again.]
$onlyPerms[manageserver;You didnt have permission **Manage Server**.]
$suppressErrors[failed.]

$log[[DEBUG] :: $username, used the slash command command]`,
};
