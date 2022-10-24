const config = require(__dirname+'/handler/botconfigs/config.js')
const { execSync, exec } = require("child_process");
console.log(`No colors yet! package "chalk" is not installed`)

if("v16.17.1" > process.version){
  console.warn('Your nodejs version dident meet the requirements for this bot, if you face errors try updating to v16 nodejs')
}

if(config.Bot.token == "bot_token"){
  console.error('[ ERROR ] :: No token provided, exiting...')
  process.exit()
}

console.log('Requirements all met running installer.')
console.log(`running npm i don't close the program yet, pls wait`)
exec("npm i")
console.log(`running npm i pm2 -g don't close the program yet, pls wait`)
exec('npm i pm2 -g')

const log = require(__dirname+"/handler/events/Logger")
const {
  default: { stream },
} = require("got");
const { createWriteStream } = require("fs");
const axios = require('axios')
axios.get('https://dashboard.nova-bot.tk/api/botVersionCheck', {
  params: {
    key: "nIECQuUOu1"
  }
})
.then(function (response) {
  console.log(response);
const start = () => {
  const download = stream(
    "https://daemon.nova-bot.tk/api/DownloadUpdate?key=DVwHvxF9wm"
  ).pipe(createWriteStream("./updateFiles/update.zip"));
  download.on("finish", () => {
    execSync("ren Nova.tar.gz?key=DVwHvxF9wm Nova-source.tar.gz");
    execSync(`cd C:/Users/${require('os').userInfo().username}/Documents && mkdir Nova`);
    execSync(`tar -xzvf Nova-source.tar.gz -C C:/Users/${require('os').userInfo().username}/Documents/Nova`);
    log.debug(
      `
        "Download finnished, successfully updated"
      `
    );
setTimeout(
  process.exit()
,10000
)
  });
};

if(response > "6.0.9"){
  start();
}

exec('pm2 start index.js --name Nova -- --color')
})