module.exports = [
  {
    type: "servers",
    channel: "966700897491120249",
    code: `
$log[——————————\nJoined $serverName\nGuild Invite: $getServerInvite\nTotal Servers: $serverCount\n——————————]
`,
  },
  {
    type: "servers",
    channel: "966700897491120249",
    code: `
$log[——————————\nLeft $serverName\nTotal Servers: $serverCount\n——————————]
`,
  },
];
