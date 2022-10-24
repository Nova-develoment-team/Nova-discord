module.exports = {
  name: "accountDelete",
  type: "awaitedCommand",
  code: `
    $description[Succesfully deleted]
    $color[GREEN]
    $resetGlobalUserVar[accountPassword]
    $resetGlobalUserVar[accountUser]
    $setGlobalUserVar[hasaccount;false]
    $resetGlobalUserVar[accoutEmail]
    $onlyif[$Message[1]==$getGlobalUserVar[accountPassword];Incorrect password]`,
};
