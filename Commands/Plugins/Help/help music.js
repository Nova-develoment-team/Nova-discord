module.exports = {
  type: "awaitedCommand",
  name: "help-music",
  code: `
$title[🎵 Nova music]
$description[play ¦ Play a song.
playskip  ¦ skip the playing song
pause ¦ pause
resume ¦ resume a song
stop ¦ stop the song
nowplaying ¦ the songs thats playing
loop ¦ loop
shuffle ¦ shuffle
shuffleskip ¦ skip the suffle
pruning ¦ pruning
skip ¦ skip
clearqueue ¦ clear queue
queue ¦ queue
qloop ¦ qloop
seek ¦  seek
remove ¦ remove 
volume ¦ volume
filter ¦ filter
musicsettings ¦ musicsettings

> playlist

playlist ¦ Shows your playlist
playlist-add ¦ add a song to your playlist
playlist-remove ¦ remove a song from your playlist
playlist-play ¦ play something from your playlist]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the music help category command]`,
};
