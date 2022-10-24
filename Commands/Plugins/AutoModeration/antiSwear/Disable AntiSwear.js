module.exports = {
  name: "disable-antiswear",
  code: `$description[<:success:935751098092884020> successfully disabled the antiSwear plugin]
    $color[$GetServervar[color]]
    $setServerVar[antiSwear;false]
    $onlyIf[$getServerVar[antiSwear]==true;{description:<:error:935750920598351872> AntiSwear plugin already Disable}{color:$GetServervar[color]}]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:$GetServervar[color]}]

$log[[DEBUG] :: $username, used the disable-antiswear command]`,
};
