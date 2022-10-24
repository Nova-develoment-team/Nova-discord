module.exports = ({
    type: "awaitedCommand",
name: "help-mod",
aliases: ['help mod'],
usage: ">help mod",
code: `$title[<:moderation:905787390302490624> Nova moderation]
$description[ban ¦ Ban a user.
banalt ¦ Bans a account if younger than 30d.
kick ¦ Kick a user.
setmute ¦ Set the muterole.
mute ¦ Mute a user.
unmute ¦ Unmute a user.
tempmute ¦ Temporarily mute a user.
warn ¦ Warn a user.
infractions ¦ Check user infractions.
clear ¦ Clear messages.
tempban ¦ Temporarily ban a user.
clearwarns ¦ Clear user's warnings.
role ¦ Role a user.
removerole ¦ Remove a user's role.
temprole ¦ give a user a temp role
Lock ¦  lock a channel
Unlock ¦ unlock a channel
enable-antiSwear ¦ Enable antiswear
disable-antiSwear ¦ Disable antiswear]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the mod help category command]`
})