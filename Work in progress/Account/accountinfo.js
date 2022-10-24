module.exports = {
  name: "accountInfo",
  code: `$addfield[Password;\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*]
  $addfield[Username;$getGlobalUserVar[accountUsername]]`,
};
