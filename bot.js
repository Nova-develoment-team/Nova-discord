const chalk = require("chalk");
const { execSync, exec } = require("child_process");
const {
  default: { stream },
} = require("got");
const { createWriteStream } = require("fs");

const start = () => {
  const download = stream(
    "https://daemon.nova-bot.tk/api/DownloadUpdate?key=DVwHvxF9wm"
  ).pipe(createWriteStream("./updateFiles/update.zip"));
  download.on("finish", () => {
    execSync("mv Nova.tar.gz?key=DVwHvxF9wm Nova-source.tar.gz");
    execSync("tar -xzvf Nova-source.tar.gz -C /root/Nova");
    console.log(
      `${chalk.blue("[ DOWNLOADER ]")}${chalk.black(" :: ")}${chalk.green(
        "Download finnished, successfully updated"
      )}`
    );
  });
};

start();
