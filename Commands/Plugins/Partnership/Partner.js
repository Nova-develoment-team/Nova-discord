module.exports = {
  name: "partner",
  code: `$if[$message[1]==]
    $title[🤝 Partners]
    $description[Luxxy hosting [>partner Luxxy] \n Kato bot [>partner Kato] ]
    $color[$getServerVar[color]]
    $elseif[$message[1]==Luxxy]
    $title[Luxxy hosting]
    $description[$addfield[invite];[Invite](https://discord.gg/vpRuzGz3NT) $addfield[website;[Url](https://luxxy.host])]
    $color[$getServerVar[color]]
    $endelseif
    $elseif[$message[1]==Kato]
    $title[Kato]
    $description[Kato is an all in one discord bot that has more than 120+ commands, from categories such as Moderation, Economy, Fun, Images, Utility, NSFW,  Music and many more. Kato is a reliable bot that helps you organize your server and run it like a pro. Are commands are fast and simple. With Kato's host and backup host there is little to no downtime in the bot. Find any bugs? Join the support server to report them. You can also join our support discord server and leave suggestions and answer questions.
$addfield[Support Server;[Invite](https://discord.gg/a4r5qgDCu5) $addfield[Website;[Url](https://web.tahikatoo.repl.co/)] $addfield[bot invite;[Url]( https://discord.com/api/oauth2/authorize?client_id=897793289527377931&permissions=8&scope=bot)]]]
$color[$getServerVar[color]]
$endelseif    
$endif`,
};
