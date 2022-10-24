module.exports = {
  name: "readfile",
  aliasis: ["rf"],
  code: `
    $createfile[$readfile[/root/Nova/$message];file.txt]
    $if[$message[1]==/root/handler/botconfigs/config.js]
    $createfile[$readfile[/root/Nova/fooler/config.fake.js];file.txt]
    $log[ [DEBUG] :: LMAO WE TROLLED THEM]
    $endif
    $onlyforids[$botownerid;Your not my owner]
    `,
};
