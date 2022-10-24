module.exports = {
  name: "lavaloop",
  code: `
    $if[$message[1]==]
$replaceText[$replaceText[$checkCondition[$LavalinkExecute[loopsong]==true];true;Loop now **on**];false;Loop now **off**]
    $suppressErrors[{title:Error}{description:CqMz3YhWuO || No songs playing to loop}{color:RED}]


    $elseif[$message[1]==queue]

$replaceText[$replaceText[$checkCondition[$LavalinkExecute[loopqueue]==true];true;Queue loop now **on**];false;Queue loop now **off**]
    $suppressErrors[{title:Error}{description:kWZV5V3dBM || No songs playing to loop the queue}{color:RED}]
    $endelseIf

    $endif`,
};
