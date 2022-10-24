module.exports = {
  name: "slowmode",
  code: `Set the channel slowmode $message | Warning do not go above 6h
    $slowmode[$channelID;$message]
    $log[[DEBUG] :: $username, used the slowmod command]
`, //Sets the current channel slowmode to 5 minutes
};
