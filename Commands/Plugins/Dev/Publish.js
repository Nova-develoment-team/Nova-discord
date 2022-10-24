module.exports = {
  name: "publishLetter",
  code: `$setVar[letterTitle;$message[1] $setVar[letterDescription;$message[2]] $setvar[isread;false]
    $title[$getVar[letterTitle]]
    $description[$getVar[letterDescription]]
    $color[$getServerVar[color]]
    `,
};
