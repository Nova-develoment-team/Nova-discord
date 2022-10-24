module.exports = {
  name: "$alwaysExecute",
  code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[4;8]]]
$cooldown[7s]
$onlyif[$isbot[$authorid]==false;]
$onlyif[$getservervar[levelling]==true;]
`,
};
