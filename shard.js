const { ShardingManager } = require("discord.js");
const chalk = require("chalk");
const config = require("./handler/botconfigs/config.js");

const totalShards = "5";
const shardsPerCluster = "5";

const manager = new ShardingManager("./index.js", {
  token: config.Bot.token,
  // shardList: [ 0, 1, 2, 3, 4, 5 ], // if only those shards on that host etc.
  totalShards: 5, // amount or: "auto"
  shardsPerClusters: 5, // amount of shards / cluster
  mode: "process", // "process" or: "worker"
  respawn: true,
  keepAlive: {
    interval: 10000,
    maxMissedHeartbeats: 5,
    maxClusterRestarts: 3,
  },
});

manager.on("clusterCreate", (cluster) => {
  console.log(`Created cluster`);

  cluster.on("death", function () {
    console.log(`${chalk.red(`Cluster ${cluster.id} died..`)}`);
  });

  cluster.on("message", async (msg) => {
    if (!msg._sCustom) return;
    if (msg.dm) {
      const { interaction, message, dm, packet } = msg;
      await manager.broadcast({ interaction, message, dm, packet });
    }
  });

  cluster.on("error", (e) => {
    console.log(`${chalk.red(`Cluster ${cluster.id} errored ..`)}`);
    console.error(e);
  });

  cluster.on("disconnect", function () {
    console.log(`${chalk.red(`Cluster ${cluster.id} disconnected..`)}`);
  });

  cluster.on("reconnecting", function () {
    console.log(`${chalk.yellow(`Cluster ${cluster.id} reconnecting..`)}`);
  });

  cluster.on("close", function (code) {
    console.log(
      `${chalk.red(`Cluster ${cluster.id} close with code ${code}`)}`
    );
  });

  cluster.on("exit", function (code) {
    console.log(
      `${chalk.red(`Cluster ${cluster.id} exited with code ${code}`)}`
    );
  });
});
