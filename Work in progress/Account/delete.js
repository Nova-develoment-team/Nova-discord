module.exports = {
  name: "deleteAccount",
  code: `$description[Please send your password below to verify]
    $color[$getServerVar[color]]
    $awaitMessages[$authorID;30s;everything;accountDelete;Too slow! Pls run again]`,
};
