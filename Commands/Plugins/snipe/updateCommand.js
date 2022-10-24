module.exports = {
  channel: "$channelID",
  type: "updateCommand",
  code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$oldMessage]`,
};
