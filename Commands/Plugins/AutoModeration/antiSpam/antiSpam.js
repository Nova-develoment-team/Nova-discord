module.exports = {
  name: "$",
  code: `
    $setUserVar[message;0]
    $wait[5s]
    $setUserVar[message;$sum[$getUserVar[message];1]]
    $onlyif[]
    $onlyIf[$getUserVar[message]<=$getServerVar[spamLimit];{execute:mute}]
    `,
};
