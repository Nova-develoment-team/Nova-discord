/* Packages and variables*/
const gradient = require("gradient-string"); //gradients
var figlet = require("figlet"); // figlet
const Nova = require("Nova.js"); // Bot
const express = require("express"); //Web server
const bodyParser = require("body-parser"); //parser
const path = require("path"); //idk what this is for :skull:
const chalk = require("chalk"); // to send colors
const up = chalk.green; // ok working color
const os = require("os"); // TO fetch sys info
const static = chalk.hex("#03fcca"); // Staticstics and lines color
/*const db = require('./handler/database/database.js')*/
const blurplexd = chalk.hex("#7289DA"); // xd blurple color
const on = chalk.yellow; // process turned on color
const error = chalk.red; // Color for error
let idkwhatisthis = false; //Hmmm
const Discord = require("discord.js"); // Discord.js for more features
const { default: axios } = require("axios"); // Axios for get requests
const config = require("./handler/botconfigs/config.js"); // Configs
var log = require("./handler/events/Logger.js"); // Logger
require("dotenv").config();
const {exec} = require('child_process')
setInterval( async (log) => {
if(process.version < "16.17.1"){
  log.warn('Your nodejs version dident meet the requirements for this bot, be careful as you might face errors ')
}
}, 30000)

/* Variables */
/* There are 3 types of Variables

Const, var and let

They all use this

for files
Const/var/let files = require('./Directory') 

for messages
Const/var/let  Message = 'Message';

console.log(message) < this is for only 1 message 
console.log(`${message}`) < this is for doing messages like this console.log(`What ${message do you want to send}`)
in the above you cant do like that

for code
Const/var/let code = console.log('example')

then do 

code() */

/*
The Github Auto Updater :: GAU 
Made by the 2022 - 2024 © Nova team
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



require('events').EventEmitter.defaultMaxListeners = 20;
  

/* Start up */
const msg = `Nova bot`;
figlet(msg, (err, data) => {
  console.log(gradient.pastel.multiline(data));
});
console.log("Dream a bot");

// Init bot
const bot = new Nova.Bot(config.Bot);

/* [ Nova website ] */
require("./website/dashboard/index.js")(
  bot,
  1488,
);

// Anti crash
if (config.events.antiCrash) {
  require("./handler/events/antiCrash.js")()
};
/*if config.website_settings.Maintnance require('./handler/botconfigs/maintanceStatus')*/

/* [ Nova loader ] */
/* Variable handler */
bot.variables(
  require("./handler/botconfigs/Variables.js")
); 
/* Status handler */
require("./handler/botconfigs/status")(bot);
/* Callback handler */
require("./handler/botconfigs/callbacks")(bot);
/* Command handler */
bot.loadCommands(`./Commands/Plugins/`);
/* Lavalink Music handler */
require("./handler/lavalink/connecter")(bot);

const Stats = require("discord-live-stats");
const client = new Discord.Client();

const Poster = new Stats.Client(client, {
  stats_uri: "http://n2.artiom.host:1488/staties",
  authorizationkey: "ppenis",
});

require("./shard.js");
require("./logs/console.log.js");


//
rl.question('Would you like to check for updates from the github repo? (May cause errors) Yes or No', function (response) {
    if(response == "Yes"){
      if(true){
  setInterval(async () => {
      await exec(`git pull https://github.com/nova-develoment-team/Nova-discord.git`, async (error, stdout) => {
          let response = (error || stdout);
          if (!error) {
                 if (!response.includes("Already up to date.")){
                     console.log(`${chalk.red('[ GitHub ]')} Update found on github. downloading now!`);
                     await Bot.channels.cache.get(966700897491120249).send({content: "**RESTARTING . . .**", embeds:[
                         new Discord.MessageEmbed()
                         .setTitle(`**[PULL FROM GITHUB]** New update on GitHub. Pulling.`)
                         .setColor(`BLUE`)
                         .setDescription(`Logs:\n\`\`\`\n${response}\`\`\``)
                     ]})
                    console.log(`${chalk.red('[ GitHub ]')} the new version had been installed. Restarting now . . .`)
                     process.exit()
                 }else {
                     if(!idkwhatisthis) {console.log(`${chalk.green('[ GitHub ]')} Bot is up to date\n`); idkwhatisthis = true}
                 }
             }else
                 console.log(`${chalk.red('[ GitHub ]')} Error: ${error}\n`)
             })
         }, 30000)
      }
    }

          if(response == "yes"){
      if(true){
  setInterval(async () => {
      await exec(`git pull https://github.com/nova-develoment-team/Nova-discord.git`, async (error, stdout) => {
          let response = (error || stdout);
          if (!error) {
                 if (!response.includes("Already up to date.")){
                     console.log(`${chalk.red('[ GitHub ]')} Update found on github. downloading now!`);
                     await client.channels.cache.get(966700897491120249).send({content: "**RESTARTING . . .**", embeds:[
                         new Discord.MessageEmbed()
                         .setTitle(`**[PULL FROM GITHUB]** New update on GitHub. Pulling.`)
                         .setColor(`BLUE`)
                         .setDescription(`Logs:\n\`\`\`\n${response}\`\`\``)
                     ]})
                    console.log(`${chalk.red('[ GitHub ]')} the new version had been installed. Restarting now . . .`)
                     process.exit()
                 }else {
                     if(!idkwhatisthis) {console.log(`${chalk.green('[ GitHub ]')} Bot is up to date\n`); idkwhatisthis = true}
                 }
             }else
                 console.log(`${chalk.red('[ GitHub ]')} Error: ${error}\n`)
             })
         }, 30000)
      }
          }

                if(response == "No"){
console.log('Skipping...')
console.log('Launching...')
console.log('Bot init')
console.log('Booted')
      }

   if(response == "no"){
console.log('Skipping...')
console.log('Launching...')
console.log('Bot init')
console.log('Booted')
      }
    rl.close();
  })


