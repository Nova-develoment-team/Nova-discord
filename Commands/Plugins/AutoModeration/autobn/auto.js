module.exports = {
  name: "$alwaysExecute",
  code: `
A user was banned from chat for exceed the ammount of warns
$sendDm[$authorid;{description:You have been banned in $serverName || Reason: Nova auto-moderation, Exceeding number of warns, if you think it was a error dm a staff from $servername}]
$setUserVar[warn;0]
$ban[$authorid]
$onlyif[$getUservar[warn;$authorid]==3;]`,
};
