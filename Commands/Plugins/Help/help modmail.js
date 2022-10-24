module.exports = {
  type: "awaitedCommand",
  name: "help-modmail",
  code: `
    $title[<a:NewMail:916990093049360394> Nova mail!]
    $description[modMailClose ¦ close the modMail
        modmail ¦ Creat a new mod mail instance
        setupModmail ¦ Setup the mod mail
        modMailSend ¦ Mods send to user
        sendModmail ¦ Send to the mods]
        $color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the modmail help category command]`,
};
