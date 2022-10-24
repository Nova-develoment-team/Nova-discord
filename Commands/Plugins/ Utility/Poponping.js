module.exports = {
  name: "$alwaysExecute",
  code: `
      $title[Hello there $username]
      $description[I am nova my prefix is \`\`$getServerVar[prefix]\`\`, i have $commandsCount commands curently!]
      $color[$getServerVar[color]]
$onlyIf[$checkContains[$message;<@896303947311104041>;<@!896303947311104041>;@Nova.]==true;]
    `,
};
