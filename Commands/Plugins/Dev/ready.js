module.exports = {
  type: "readyCommand",
  channel: "966700897491120249",
  code: `
$description[\`\`\`\ Nova is up and loaded with $commandsCount and on a server with $djseval[require('os').cpus().length;yes] cores, $djseval[require('os').arch;yes] Arch and release $djseval[require('os').release();yes]\`\`\`]
$color[$getServerVar[color]]

    $log[└─────────────────────────────────────────────┘]
    $log[│\       Server release :: $djseval[require('os').release();yes]\   │]
    $log[├─────────────────────────────────────────────┤]
    $log[│\       Server platform :: $djseval[require('os').platform();yes]\              │]
    $log[├─────────────────────────────────────────────┤]
    $log[│\       Server arch :: $djseval[require('os').arch;yes]\                    │]
    $log[├─────────────────────────────────────────────┤]
    $log[│\       Server cores :: $djseval[require('os').cpus().length;yes] \                    │]
    $log[┌───────────────[ Server stats ]──────────────┐]
    $log[\                                              ]
    $log[\                                              ]
    $log[\                                              ]
    $log[└───────────────────────────────────────────┘]
    $log[│ \ \ \ \ \ \ Bot commands :: $commandsCount \ \ \ \             │]
    $log[├───────────────────────────────────────────┤]
    $log[│ \ \ \ \ \ \ Bot ping :: $pingms \ \ \ \ \ \ \  \          │]
    $log[├───────────────────────────────────────────┤]
    $log[│ \ \ \ \ \ \ Client :: $usertag[$clientId] \ \ \ \ \ \ \  \       │]
    $log[├───────────────────────────────────────────┤]
    $log[│ \ \ \ \ \ \ Owner :: $usertag[$botownerid] \ \ \             │]
    $log[┌───────────────[ Bot stats ]───────────────┐]
    
`,
};
