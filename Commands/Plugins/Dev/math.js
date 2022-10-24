module.exports = {
  name: "math",
  code: `
$title[Calculator]
$author[$userTag[$authorID];$authorAvatar]
$description[
$addField[📤 Output;\`\`\`$djsEval[
const m = require('mathjs')

m.evaluate('$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message];÷;/];x;*];';in];,;];π;pi]')
;yes]\`\`\`]

$addField[📥 Input; \`\`\`$message\`\`\`;yes]
]
$footer[Calculator made with Math.js]
$color[ORANGE]
$onlyForids[$botownerid;746295959251583048;845312519001342052;764888169047916636;only my owners may use this command]
$onlyIf[$checkContains[$toLowercase[$message];@;#;$;_;&;!;?]==false;]
$suppressErrors
`,
};
