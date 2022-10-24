module.exports = {
  type: "interactionCommand",
  name: "prefix",
  code: `
    $interactionreply[{title:Prefix change}{description: Change the prefix to $Message[1]}{color:$getServervar[color]}]
    $setservervar[prefix;$message]
    $onlyPerms[manageserver;need manageserver perm]
    $onlyIF[$memberscount>10;$servername must atleast have 10 members ]`,
};
