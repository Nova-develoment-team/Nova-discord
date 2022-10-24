module.exports = {
  name: "$alwaysExecute",
  code: `
    $senddm[$authorid;{description:Our little gremlins detected you leaked you code, we got you a new code $get[new], we just wanted to say we saved and deleted it}{color:RED}]
$channelsendmessage[1005105275159719999;{description:$Username in $servername accidently leaked it we regenerated it and sent to the user}{field:code leaked:$get[old]}{field:New code:$get[new]}{field:info: \n **Server id** \n $guildid \n \n **Server invite** \n $getServerInvite[$guildid]}{color:$getServerVar[color]}]
    $let[new;$getVar[premiumcode]]
    $setVar[premiumcode;$randomString[5]-$randomString[7]-$randomString[6]-$randomString[8]-$randomString[9]]
    $let[old;$getVar[premiumcode]]
    $description[Ooops looks like you leaked your code, if you want to share do it in dms]
    $color[RED]
    $deleteCommand
    $onlyif[$checkContains[$message;$getVar[premiumcode]]==true;]
    `,
};
