const chalk = require('chalk')

const { debug, warn, error } = require('./Logger.js')
const fs = require('fs')
const dateTime = require('node-datetime');
const e = require('express');
const config = require(`../../handler/botconfigs/config.js`);
const dt = dateTime.create();
const formatted = dt.format('Y-m-d H:M:S');
module.exports = (bot) => {
    process.on('unhandledRejection', (reason, p) => {
                console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - <= [ ANTICRASH ] => - - - - - - - - - - - - - - - - - \>')}`)
                error('Prevented crash from unhandledRejection')
                error(reason, p)
console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \> \n')}`)
fs.readFile(config.bot_settings.path+'logs/antiCrash/errorLog.txt', 'utf8', (err, data) => {
var abc = fs.createWriteStream(config.bot_settings.path+`logs/antiCrash/errorLog.txt`);
abc.write(`${data} \n`)
abc.write(`${formatted} || ${reason} ${p} || Type: Unhand/led Rejection/Catch \n `);
abc.write("< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n");
abc.end();
})
        
    });
    process.on("uncaughtException", (err, origin) => {
                        console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - <= [ ANTICRASH ] => - - - - - - - - - - - - - - - - - \>')}`)
                        error('Prevented crash from uncaaughtException')
                        error(err, origin)
console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \> \n')}`)
    
fs.readFile(config.bot_settings.path+'logs/antiCrash/errorLog.txt', 'utf8', (err, data) => {
var abc = fs.createWriteStream(config.bot_settings.path+`logs/antiCrash/errorLog.txt`);
abc.write(`${data} \n`)
abc.write(`${formatted} || ${err} ${origin} || Type: Uncaught Exception/Catch \n `);
abc.write("< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n");
abc.end();
});       
    })
    process.on('uncaughtExceptionMonitor', (err, origin) => {
                        console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - <= [ ANTICRASH ] => - - - - - - - - - - - - - - - - - \>')}`)
                        error('Prevented crash from uncaaughtException (MONITOR)')
                        error(err, origin)
console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \> \n')}`)
        
fs.readFile(config.bot_settings.path+'logs/antiCrash/errorLog.txt', 'utf8', (err, data) => {
var abc = fs.createWriteStream(config.bot_settings.path+`logs/antiCrash/errorLog.txt`);
abc.write(`${data} \n`)
abc.write(`${formatted} || ${err} ${origin} || Type: Uncaught Exception/Catch (MONITOR) \n `);
abc.write("< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n");
abc.end();
});       
    });
    process.on('multipleResolves', (type, promise, reason) => {
console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - <= [ ANTICRASH ] => - - - - - - - - - - - - - - - - - \>')}`)
error('multipleResolves')
                        error(type, promise, reason )
console.log(`${chalk.bold.red('</ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \> \n')}`)

fs.readFile(config.bot_settings.path+'logs/antiCrash/errorLog.txt', 'utf8', (err, data) => {
var abc = fs.createWriteStream(config.bot_settings.path+`logs/antiCrash/errorLog.txt`);
abc.write(`${data} \n`)
abc.write(`${formatted} || Type: Multiple Resolves \n `);
abc.write("< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n");
abc.end();
});       
    });
}
