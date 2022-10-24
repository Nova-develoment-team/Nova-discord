const fs = require('fs')
const chalk = require('chalk')
const error = chalk.red
const dateTime = require('node-datetime');
const dt = dateTime.create();
const formatted = dt.format('Y-m-d H:M:S');

fs.stat('/home/container/logs/antiCrash/errorLogs.txt', (err, stats) => {
    if (err) {
        console.log(`File doesn't exist.`);
    } else {
        if(fs.stats.size == 1){
            fs.readFile('/home/container/dump/antiCrashLogs', 'utf8', (err, data) => {
var abc = fs.createWriteStream(`/home/container/dump/antiCrashLogs/${formated}-antiCrashLog.txt`)
abc.write(`${data} \n`)
abc.end();
fs.readFile('/home/container/logs/antiCrash/errorLog.txt', 'utf8', (err, data) => {
var abcd = fs.createWriteStream(`/home/container/logs/antiCrash/errorLog.txt`)
abcd.write(`< - - - - - - - - - < = AntiCrash Logs = > - - - - - - - - - >`)
abcd.end();
                 
        }
    }});

