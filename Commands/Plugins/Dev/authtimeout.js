module.exports = {
  type: "timeoutCommand",
  code: `
  $setUserVar[sudoaccess;false;$timeoutdata[userID]]`
}