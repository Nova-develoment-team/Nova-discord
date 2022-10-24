module.exports = [{
name: 'sudo',
code: `$if[$mssage[1]==]
usage: sudo -h | -K | -k | -v
usage: sudo -v [-ABknS] [-g group] [-h host] [-p prompt] [-u user]
usage: sudo -l [-ABknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command]
usage: sudo [-ABbEHknPS] [-r role] [-t type] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R
            directory] [-T timeout] [-u user] [VAR=value] [-i|-s] [<command>]
usage: sudo -e [-ABknS] [-r role] [-t type] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R
            directory] [-T timeout] [-u user] file ...
            $elseif[$message[1]==su]
            $awaitMessages[$authorID;5s;auth;Duckey;Command Timed out] 
[sudo] Say Duckey
$endElseIf
$endif`
}, {
type: "awaitedCommand",
name: "auth",
code: `
$setUserVar[auth;true]
\`\`\`root@Nova-bot~:#`\`\`\
$clear[3]
$onlyif[$message==Duckeyiscool]
[sudo] password for Duckey:`
}]