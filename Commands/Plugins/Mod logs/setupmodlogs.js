module.exports = {
  name: "setupmodlogs",
  code: `
    <:success:935751098092884020> You setup the modlogs system, Congrats!

    $setServerVar[modlogschannel;$message[1]]
    $setServerVar[modlogSetup;true]
    $setServerVar[modlogsEnabled;true]

    $onlyif[$mentionedchannels[1]!=;Hello! Are you trying to setup modlogs? example: >setupmodlogs {your channel of choice} \n
<:warning:968910682911305838> You might see this if you put a invalid channel or $username[$clientId] can't see the channel, so pls check and try again]    
`,
};
