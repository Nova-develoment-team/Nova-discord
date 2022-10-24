module.exports = {
  Bot: {
    token: process.env.token,
    prefix: ["$getServerVar[prefix]", "<@$clientID>"],
    intents: "all",
  },
  respondOnEdit: {
    commands: true,
  },
  debug: {
    interpreter: true,
  },
  suppressAllErrors: {
    errorMessage: [
      "",
      "$log[[ERROR] :: $username had a error in $servername | ERROR ID: $randomString[$random[4;10]]]{newEmbed:{title:Ah oh!}{description:There was a error | ERROR ID: $randomString[$random[4;10]]}{color:fcbfcb}}",
    ],
  },
};
