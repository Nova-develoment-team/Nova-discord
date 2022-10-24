module.exports = ({
type: "musicEndCommand",
channel: "$channelid",
code: `$description[No more songs in the queue, leaving the voice channel]
$leavevc
$color[$getServerVar[color]]`
})