module.exports = ({
type: "awaitedCommand",
name: "auth",
code: `
$setTimeout[24h;userID: $authorID]
$setUserVar[sudoaccess;true;$authorid]
root@Nova-bot~:# echo "Success! Your now root. You have dev powers now. in 1 day you have to relogin as root"
Success! Your now root. You have dev powers now. in 1 day you have to relogin as root
root@Nova-bot~:#
`
})