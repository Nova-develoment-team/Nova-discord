module.exports = {
  name: "AccountSetup",
  type: "awaitedCommand",
  code: `
$setglobalUserVar[AccountPassword;$message[2]]
$setGlobalUserVar[hasaccount;true]
$setglobalUserVar[AccountEmail;$message[1]]
$setglobalUserVar[AccountUser;$message[3]]
    $onlyif[$message[1]!=;Ah oh! Please give us your email]
    $onlyif[$message[2]!=;Ah oh! Please set a password]`,
};
