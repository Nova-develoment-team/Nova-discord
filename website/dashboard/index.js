module.exports = function (bot, port) {
  bot = bot.client;
  const path = require("path");
  const fs = require("fs");
  const config = require(`../../handler/botconfigs/config.js`);

  const chalk = require("chalk");
  var session = require("express-session");
  //const config = require(`/home/runner/Nova-tests/handler/botconfigs/config.js`)
  const express = require("express");
  const app = new express();
  router = express.Router();
  app.use(router);
  app.use("/assets", express.static(path.join(__dirname, "assets")));

  app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
  const bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  const sessions = require("express-session");
  const oneDay = 1000 * 60 * 60 * 24;
  app.use(
    sessions({
      secret: "ioyre89irhf893y48yfhwiehk94wyrh3qeda78tg3",
      saveUninitialized: true,
      cookie: { maxAge: oneDay },
      resave: false,
    })
  );
  const {
    debug,
    warn,
    error,
  } = require("/root/home/Nova/handler/events/Logger.js");


  /*   const cluster = require('cluster')
const { cpus } = require('os')
const process = require('process')
const numCPUs = cpus().length;

    if (cluster.isPrimary) {
  console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.green(`primary ${process.pid} is running`)}`);  
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
       console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.green(`Creating workers.`)}`);
  console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.green(`Creating workers..`)}`);
  console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.green(`Creating workers...`)}`);

  }

  cluster.on('exit', (worker, code, signal) => {
  console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.red(`Worker ${worker.process.pid} died`)}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.green(`Creating workers.`)}`);
  console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.green(`Creating workers..`)}`);
  console.log(`${chalk.blue('[ WORKER ]')} ${chalk.grey(' :: ')} ${chalk.green(`Creating workers...`)}`);

  }
  });
} else {*/

  const plugins = require("aoi.js-plugins");
  const dash = new plugins.Dash({
    clientID: "896303947311104041",
    clientSecret: config.dash_settings.secret,
    redirectURI: "https://dashboard.nova-bot.tk/auth/callback",
    bot: bot,
  });

  function al(port) {
    if (bot) {
      app.listen(port);
    } else {
      al(port);
    }
  }

  al();

  app.get("/hmmm", (req, res) => {
    res.send("Looks like you found something you shouldent have");
  });


  require("./dash.js")(app, dash, bot, express);
  /*Nova bot api*/

  app.get("/api/serverVar", (req, res) => {
    if (!req.query.key || !keysList.includes(req.query.key))
      return res.json({ error: "invalid key" });

    if (config.website_settings.Maintnance == true) {
      res.send("{message: Api in maintenance brb}");
    }

    if (req.headers.authorization != "NZeM2X5Zp4") {
      console.log(
        `${chalk.red("[ WEBSERVER ]")} ${chalk.grey(" :: ")} ${chalk.red(
          "Someone tried to access the api without having the right key"
        )}`
      );
      res.status('401').sendFile(__dirname+"/401forbidden.html")
    }

    res.send(
      `Data set successfully var: ${req.query.variable} ${req.query.guildid} ${req.query.value}`
    );

    bot.db.set(
      "main",
      `${req.query.variable}_${req.query.guildid}`,
      req.query.value
    );
  });

  app.get("/api/databaseFetch", (req, res) => {
    if (req.headers.authorization != "NZeM2X5Zp4") {
      console.log(
        `${chalk.red("[ WEBSERVER ]")} ${chalk.grey(" :: ")} ${chalk.red(
          "Someone tried to access the api without having the right key"
        )}`
      );
    }

    res.sendFile("../../database/main/main_scheme_1.sql");

    if (!req.query.key || !keysList.includes(req.query.key)) {
      res.json({ error: "invalid key, operation denied ❌" });
    }
    if (config.website_settings.Maintnance == true) {
      res.send('{message: "Api in maintenance brb"}');
    }
  });

  app.get("/404", (req, res) => {
res.status(404).sendFile(__dirname+"/oof.html")
  })

  app.use(function(req, res) {
    res.redirect("/404")
  })


  

  const keysList = require("./assets/keys.js").keys;

  app.listen(port);
  debug(`Webserver successfully started on ${port}`);
};
/*
Commented out becouse of worker system
}*/

