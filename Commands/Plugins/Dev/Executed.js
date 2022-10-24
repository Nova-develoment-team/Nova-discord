module.exports = {
  name: "$alwaysExecute",
  code: `$if[$stringStartsWith[$message;$getServerVar[prefix]]]
    $setGlobalUserVar[commanduserused;$sum[1;$getGlobalUserVar[commanduserused]]
 $setVar[commandusersused;$sum[1;$getVar[commandusersused]]]
    $endif
    `,
};
