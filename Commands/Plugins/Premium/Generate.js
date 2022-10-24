module.exports = {
  name: "createPremiumCode",
  code: `
$description[<:success:935751098092884020> Generated a premium code, $username, The code was sent to your dms the code lasts for 1 month and then its un claimable]
$color[GREEN]
    $log[[DEBUG] :: $username, Generated a premium code]
    $senddm[$authorId;{description:$username your code is $getVar[premiumcode]}{color:$getServerVar[color]}]
    $setVar[premiumcode;$randomString[5]-$randomString[7]-$randomString[6]-$randomString[8]-$randomString[9]]
    $onlyForids[$botownerid;870441674525012018;715350994678055004;746295959251583048;843536174726512642;only my  owners may use this command]`,
};
