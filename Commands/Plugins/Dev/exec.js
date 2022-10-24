module.exports = {
  name: "execute",
  aliasis: ["exec"],
  code: `
    $createfile[$exec[$message];/database/ExecutedFileData/exec$getVar[execdatanumber].txt]
    $setVar[execdatanumber;$sum[1;$getVAr[execdatanumber]]]
    $onlyforids[$botownerid;Your not my owner]`,
};
