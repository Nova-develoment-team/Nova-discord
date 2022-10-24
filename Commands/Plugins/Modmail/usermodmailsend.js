module.exports = {
  name: "sendModmail",
  code: `
    $title[Success! You sent a message to the mods.]
    $description[You sent: $message]
    $color[GREEN]
    $channelSendMessage[$getGlobalUserVar[channelid];{title:$authorid}{description:$username Sent: $message}{color:$getVar[color]}]
    $onlyif[$GetGlobalUserVar[isModmail]==true;{description:<a:failed:947763053938757682> there are no modmail sessions}{color:RED}]
    $onlyIf[$channelType==dm;{title: <a:failed:947763053938757682> Error!}{description:This command is for dms only!}{color:RED}]`,
};
