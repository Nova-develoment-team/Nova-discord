module.exports = ({
type: "loopCommand",
executeOnStartup: "true",
every: "10000",
code: `
$editMessage[1042675343938568192;{title:Client Stats}{field:🤖 CLIENT STATS: **\`\`•\`\` Client** :: :green_circle: Online
**\`\`•\`\` Ping** :: $pingms
**\`\`•\`\` Uptime** :: $uptime
**\`\`•\`\` Servers** :: $serverCount
**\`\`•\`\` Users** ::  $djseval[client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);yes]
**\`\`•\`\` Channels** :: $djseval[client.channels.cache.size;yes]
}{field:📶 DATABASE:
**\`\`•\`\` Connection** :: :green_circle: Online
**\`\`•\`\` Latency** :: $dbpingms (dbd.db)
}{field:️⚙️ HARDWARE:
**\`\`•\`\` OS** :: $djseval[const { os } = require("node-os-utils");
os.oos();yes]
**\`\`•\`\` Cores** :: $djseval[require('os').cpus().length;yes]
**\`\`•\`\` CPU Usage** :: $cpu%
**\`\`•\`\` RAM** :: $djseval[const { mem } = require("node-os-utils");
async function getmem() {
 const { totalMemMb, usedMemMb } = await mem.info();
}
getmem();yes]
\`\`•\`\` **RAM Used** :: $ram mb}
{color:BLUE};966305408576786524]
`})