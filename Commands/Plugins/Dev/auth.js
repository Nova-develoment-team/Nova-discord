module.exports = ({
type: "awaitedCommand",
name: "auth",
code: `
$setUserVar[auth;true]
\`\`\`root@Nova-bot~:#`\`\`\
$clear[3]
$onlyif[$message==Duckeyiscool]
[sudo] password for Duckey:`
})