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
$awaitMessages[$authorID;5s;$getVar[sudopass];auth;su: Authentication failure]
Ducky@Nova-bot~:# sudo su
Password:
$onlyif[$getUserVar[sudoaccess]==false;You are already root]
$endelseif
$endif
`
}]