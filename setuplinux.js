const config = require(__dirname+'/handler/botconfigs/config.js')
const { execSync, exec } = require("child_process");
console.log(`No colors yet! package "chalk" is not installed`)

if(process.version < "16.17.1"){
  console.warn('Your nodejs version dident meet the requirements for this bot, if you face errors try updating to v16 nodejs')
}

if(config.Bot.token || process.env.token == "bot_token"){
  console.error('[ ERROR ] :: No token provided, exiting...')
  process.exit()
}

console.log('Requirements all met running installer.')
execSync("npm i")
execSync('npm i pm2 -g')
const log = require(_dirname+"/handler/events/Logger")
const {
  default: { stream },
} = require("got");
const { createWriteStream } = require("fs");

axios.get('https://dashboard.nova-bot.tk/api/botVersionCheck', {
  params: {
    key: nIECQuUOu1
  }
})
.then(function (response) {
  console.log(response);
const start = () => {
  const download = stream(
    "https://daemon.nova-bot.tk/api/DownloadUpdate?key=DVwHvxF9wm"
  ).pipe(createWriteStream("./updateFiles/update.zip"));
  download.on("finish", () => {
    execSync("mv Nova.tar.gz?key=DVwHvxF9wm Nova-source.tar.gz");
    execSync("cd /home/ && mkdir Nova");
    execSync("tar -xzvf Nova-source.tar.gz -C /home/Nova");
    log.debug(
      `
        "Download finnished, successfully updated"
      `
    );
execSync('pm2 start index.js --name Nova -- --color')
setTimeout(
  process.exit()
,10000
)
  });
};

if(response > "6.0.9"){
  start();
}
})