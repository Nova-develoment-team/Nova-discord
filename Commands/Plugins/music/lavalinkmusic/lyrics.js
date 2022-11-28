module.exports = {
name: "lyrics",
code: `$if[$message[1]==]
Please choose one
>lyrics current (Displays current songs lyrics | Un stable) 
>lyrics other (Displays lyric of choice)
$elseif[$message[1]==current]
$createFile[$jsonrequest[https://api.nova-bot.tk/misc/lyrics?song=$uri[encode;$lavalinkExecute[songinfo;name]];lyrics];lyrics.txt]
$endelseif
$elseif[$message[1]==other]
$createFile[$jsonrequest[https://api.nova-bot.tk/misc/lyrics?song=$uri[encode;$message[3]];lyrics];lyrics.txt]
$endelseif
$endif
`
}