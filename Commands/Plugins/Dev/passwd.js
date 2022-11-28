module.exports = {
  name: "passwd",
  code: `
  Set the root password to ||No lol||
  $sendDm[$authorid;The root password is $message]
  $setVar[sudopass;$message]
  $onlyForids[$botownerid]`
}