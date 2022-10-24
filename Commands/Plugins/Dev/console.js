module.exports = [{
    name: "console",
    code: `
<<<<<<< HEAD:Commands/Plugins/💻Dev/console.js
    $buttonCollector[$get[id];$authorID;1m;1,2,0;await1,await2,await0;Only Duckey, reko can use this interaction,,64]
       $let[id;$apiMessage[$channelId;;{title:Dev console}{description:$username pls choose an option}
{color:RANDOM}{footer: Page 0/7};{actionRow:Reboot,2,2,1,,false,,true:Shutdown,2,1,1,,false};;yes]]
$onlyForids[$botownerid;746295959251583048;746295959251583048;only my owners may use this command]`,
}, {
    
    type: "awaitedCommand",
    name: "await1",
    code: `$interactionReply[;Shuting down...] $killClient $onlyForids[$botownerid;746295959251583048;only my owners may use this command]`},
                 {
    type: "awaitedCommand",
    name: "await2",
    code: `$interactionReply[;Rebooting...] $reboot[index.js] $onlyForids[$botownerid;746295959251583048;only my owners may use this command]`},
                  {  
  type: "awaitedCommand",
    name: "await0",
    code: `$interactionReply[;{title:Dev console}{description:$username pls choose and option}
{color:RANDOM};{actionRow:Reboot 1,2,2,2,,false,,true:Shutdown,2,1,1,,false};;yes]`}]
=======
    $buttonCollector[$get[id];$authorID;1m;1,2,0;await1,await2,await0;Only Duckey can use this interaction,,64]
       $let[id;$apiMessage[$channelId;;{title:Dev console}{description:Duckey pls choose an option}
{color:RANDOM}{footer: Page 0/7};{actionRow:Reboot,2,1,0,,false,,true:Shutdown,2,1,1,,false};;yes]]
$onlyForids[$botownerid;870441674525012018;only my  owners may use this command]`,
}, {
    type: "awaitedCommand",
    name: "await1",
    code: `$interactionReply[;Shuting down...] $killClient $onlyForids[$botownerid;870441674525012018;only my  owners may use this command]`},
                 {
    type: "awaitedCommand",
    name: "await2",
    code: `$interactionReply[;Rebooting...] $reboot[index.js] $onlyForids[$botownerid;870441674525012018;only my  owners may use this command]`},
                  {  
  type: "awaitedCommand",
    name: "await0",
    code: `$interactionReply[;{title:Dev console}{description:Duck pls choose and option}
{color:RANDOM};{actionRow:Reboot 1,2,1,2,,false,,true:Shutdown,2,1,1,,false};;yes]`}]
>>>>>>> 10ace2e0b1aba75cf335f509df3e588ed530d341:Commands/Plugins/dev/console.js
