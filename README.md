# Introduction

**NOTES**
* dont run on replit
* dont run on glitch
* you can run on heroku
* provide your own emojis
* can run on pterodactyl

**the server**
* linux mechine running 20.04
* nodejs with 16.x+

**setup**
go to ./handler/botconfigs/config.js
change to token to your token [Developer portal](https://discord.com/developers/applications)
make a new application
for the bot token
![example](https://cdn.nova-bot.tk/chrome_o6R5KsOUJK.png/direct)
![example](https://cdn.nova-bot.tk/chrome_u7hUBxQsFx.png/direct)
click make a bot
you will see this screen
![example](https://cdn.nova-bot.tk/chrome_39yF1XTOk6.png/direct)
click on Reset Token
get the token of the bot and place in token field
to change the token of the bot, run ">prefix (desired prefix)"

for the dashboard get the bot secret
oauth/general
click bot secret
copy the secret place in the secret area
copy the client id 
go to /website/dashboard/dash.js
place the bot id there in the client id field
and change to your ip and port 
for the dashboard.nova-bot.tk/auth/callback
put localhost:1488/auth/callback
if adding a domain put your domain instead
after that you can run node index.js
