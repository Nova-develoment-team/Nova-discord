module.exports = {
  type: "interactionCommand",
  name: "stats",
  code: `
$interactionReply[{thumbnail:$userAvatar[$clientID]}{field:Server specs:\`\`\`ts
Server cores:  $djseval[require('os').cpus().length;yes]
Server ram: $rammb
Server uptime: $uptime
Server ping: $ping
\`\`\`:yes}{field:Bot statistics:\`\`\`ts
Total users: $djseval[client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);yes]
Total servers: $serverCount
Total commands used: $getVar[commandusersused]
Bot version: $getVar[novaVersion]
\`\`\`:yes}{field:Server details:\`\`\`ts
Server host: Paraduckhost
Server arch:  $djseval[require('os').arch;yes]
Server release: $djseval[require('os').release();yes]
Server platform: $djseval[require('os').platform();yes]
Process PID: $djsEval[process.pid;yes]
\`\`\`}{color:$getServerVar[color]}{footer:Made with 💖 using aoi.js}]
`,
};
