module.exports = {
  name: "novaVersion",
  code: `$setVar[novaVersion;$message]
Set novas version to $message
$onlyForids[$botOwnerId;Your not my owner]
`,
};
