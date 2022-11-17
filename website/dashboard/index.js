/* The api of Nova bot. 
Don't edit this, this is used for direct called from off server websites
example: "https://api.nova-bot.tk"
before editing contect ducky
*/




module.exports = function (bot, port) {
  bot = bot.client;
  const path = require("path");
  const fs = require("fs");
  const config = require(`../../handler/botconfigs/config.js`);

  const chalk = require("chalk");
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
  const oneDay = 1000 * 60 * 60 * 24;
  const {
    debug,
    warn,
    error,
  } = require("../../handler/events/Logger.js");
const user = 'duckey'
const pass = 'NovaDev'

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

const sessions = require("express-session");
  app.use(
    sessions({
      secret: "ioyre89irhf893y48yfhwiehk94wyrh3qeda78tg3",
      saveUninitialized: true,
      cookie: { maxAge: oneDay },
      resave: false,
    })
  );


  const plugins = require("nova.js-plugins");
  const dash = new plugins.Dash({
    clientID: config.dash_settings.id,
    clientSecret: config.dash_settings.secret,
    redirectURI: config.website_settings.domain+"/auth/callback",
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
res.redirect('/forbidden')    }

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
res.redirect('/maintenance')    }
  });

  app.get('/api/botVersionCheck', (req, res) => {
    if(req.query.key != "nIECQuUOu1"){
      res.send('oof')
    }
    res.send('6.1.0')
  })
  
  app.get("/404", (req, res) => {
res.status(404).render(__dirname+"/pages/error/page-not-found.ejs", {
  config: config,
})
  })
  app.get("/forbidden", (req, res) => {
      res.status(401).render(__dirname+"/pages/error/forbidden.ejs", {
        config: config
      })
  })

    app.get("/maintenance", (req, res) => {
      res.render(__dirname+"/pages/error/maintenance.ejs", {
        config: config
      })
  })
app.get('/*', (req, res) => {
  res.redirect('/404')
})


  const keysList = require("./assets/keys.js").keys;

  app.listen(port);
  debug(`Webserver successfully started on ${port}`);
};
/*
Commented out becouse of worker system
}*/

