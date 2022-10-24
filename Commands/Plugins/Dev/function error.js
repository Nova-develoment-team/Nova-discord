module.exports = {
  type: "functionErrorCommand",
  channel: "966700897491120249",
  code: `
$title[Error in $serverName]
$descripton[The command is $handleError[command] failed to execute \n Function $handleerror[function \n the error: $handleerror[error] ]]
$color[RED]
`,
};
