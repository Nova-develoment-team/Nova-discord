const path = require("path");
const fs = require("fs");
const dateTime = require("node-datetime");
const dt = dateTime.create();
const formatted = dt.format("Y-m-d H:M:S");
const config = require(`../../handler/botconfigs/config.js`);
const {
  debug,
  warn,
  error,
} = require("/root/home/Nova/handler/events/Logger.js");



module.exports = (app, dash, bot, express) => {





  app.disable('x-powered-by');
  const path = require('path')
  app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
  app.use(express.static(path.join(__dirname + '/assets')))
  

  
  app.get("/auth/callback", async (req, res) => {
    let code = req.query.code;
    let ac = await dash.getAccessToken(code);
    req.session.act = ac;
    let guser = await dash.getUser(req.session.act)
    req.infodiscriminator = guser.discriminator;
   req.infoid = guser.id;
    req.infousername = guser.username; 
    req.infoavatar = guser.avatar;
  

   var AsciiTable = require('ascii-table')
   var table = new AsciiTable('New user login')
   table
     .setHeading('Username', 'discriminator', 'session')
     .addRow(req.infousername, req.infodiscriminator, req.session.act)

  console.log(table.toString())
   
    res.redirect("/");
    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `User login || type: callback || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
    }
  });

  
  app.get("/", async (req, res) => {
    let b = dash.generateUrl();
    if(req.session.act){
    var content = fs.readFileSync(__dirname + "/indexalogin.html");
    var file = content.toString();
    let guser = await dash.getUser(req.session.act)
    req.infodiscriminator = guser.discriminator;
   req.infoid = guser.id;
    req.infousername = guser.username; 
    req.infoavatar = guser.avatar;
  
    res.send(`${file
      .replace("<!logingen>", b)
      .replace("<!userid>",  req.infoid)
      .replace("<!useravatar>", req.infoavatar)
      .replace("<!userusername>", req.infousername)
      .replace("<!userdiscriminator>", req.infodiscriminator)
    }`);
    }
 else{
  var content = fs.readFileSync(__dirname + "/index.html");
    var file = content.toString();
    res.send(`${file
      .replace("<!logingen>", b)



    }`);
 }   
    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `User connected to website || type: main page || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
    }
    if (config.website_settings.Maintnance == true) {
      res.send("website in maintenance");
    }
  });

  app.get("/console", async (req, res) => {

    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `User connected to website || type: management console  || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
        }
    let b = dash.generateUrl();
    if (req.session.act) {
      const content = fs.readFileSync(__dirname + "/dash.html");
      const file = content.toString();
      let guser = await dash.getUser(req.session.act)
      req.infodiscriminator = guser.discriminator;
     req.infoid = guser.id;
      req.infousername = guser.username; 
      req.infoavatar = guser.avatar;
      res.send(
        file
          .replace("<!usercount>", bot.users.cache.size)
          .replace("<!servercount>", bot.guilds.cache.size)
          .replace("<!username>", bot.user.username)
          .replace("<!background>", config.website_settings.bg)
            .replace("<!logingen>", b)
            .replace("<!userid>",  req.infoid)
            .replace("<!useravatar>", req.infoavatar)
            .replace("<!userusername>", req.infousername)
            .replace("<!userdiscriminator>", req.infodiscriminator)
      );
    } else {
      res.redirect(b);
    }
  });


  app.get("/devlogin", async (req, res) => {
    let code = req.query.code;
    let ac = await dash.getAccessToken(code);
    req.session.act = ac;
    res.redirect("/");
    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `User login || type: callback || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
    }
  });

  app.get("/auth/logout", async (req, res) => {

    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `User logout || type: logout || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
    }

    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } // cannot access session here
      else {
        console.log("Logged Out");
      }
    });
    res.redirect("/");
  });

  app.get("/console/select", async (req, res) => {

    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `Server selection || type: selection || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
    }

    if (req.session.act) {
      let b = await dash.getCommonAdminGuilds(req.session.act);
      let d = await dash.getGuilds(req.session.act);
      let c = await dash.getAdminGuilds(req.session.act);
      for (let [i, guild] of Object.entries(d)) {
        var aa;
        var bb;
        if (c.includes(guild.id) == true && b.includes(guild.id) == true) {
          aa =
            aa +
            `<label><li>
                            <a href="/console/dashboard/${guild.id}/"><input type="image" name="${guild.name}" value="${guild.id}" src="https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png" width="100px" height="100px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'"
                            style="margin: 70px;border: 5px solid #555;border: 5px solid;border-color:#1A2634;border-radius: 50%"  required>
                            <br>
                            <b><p style="color:white;text-align: center;">${guild.name}</p></b></a>
                          </li></label>`;
        } else if (c.includes(guild.id) == true) {
          bb =
            bb +
            `<label>
                            <a href="/invite-bot/${guild.id}"><input type="image" name="${guild.name}" value="${guild.id}" src="https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png" width="100px" height="100px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'"
                            style="margin: 70px;border: 5px solid #555;border: 5px solid;border-color:#1A2634;border-radius: 50%
                            "  required>
                            <br>
                            <b><p style="color:white;text-align: center;">${guild.name}</p></b></a>
                          </label>`;
        }
      }
      const selection = fs.readFileSync(__dirname + "/serverselection.html");
      const selectfile = selection.toString();
      let guser = await dash.getUser(req.session.act)

      req.infodiscriminator = guser.discriminator;
      req.infoid = guser.id;
       req.infousername = guser.username; 
       req.infoavatar = guser.avatar;
        res.send(
          selectfile
            .replace("<!usercount>", bot.users.cache.size)
            .replace("<!servercount>", bot.guilds.cache.size)
            .replace("<!username>", bot.user.username)
            .replace("<!background>", config.website_settings.bg)
            .replace("<!aa>", aa.replace("undefined",""))
            .replace("<!bb>", bb.replace("undefined",""))
            .replace("<!logingen>", b)
            .replace("<!userid>",  req.infoid)
            .replace("<!useravatar>", req.infoavatar)
            .replace("<!userusername>", req.infousername)
            .replace("<!userdiscriminator>", req.infodiscriminator)
      )
    } else {
      let b = dash.generateUrl();
      return res.redirect(b);
    }
  });

  app.get("/invite-bot/:id", function (request, response) {
    response.redirect(
      `https://discord.com/oauth2/authorize?response_type=code&client_id=${bot.user.id}&scope=bot+applications.commands&guild_id=${request.params.id}&disable_guild_select=true&prompt=consent&permissions=8`
    );
  });
  app.get('/console/dashboard/:id', async (req,res) => {
    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `User server dashboard || type: dashboard || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
    }



    if (req.session.act){

  const dashboard = fs.readFileSync(__dirname + "/dashboard.html");
  const dashboardfile = dashboard.toString();
/*
  */

      let b = await dash.getCommonAdminGuilds(req.session.act);
      let d = await dash.getGuilds(req.session.act);
      
      if (b.includes(req.params.id)==true){
        for (let [i, guild] of Object.entries(d)) {
          if (guild.id==req.params.id){
            let gname=guild.name;
            let gicon = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
            let prefix = bot.db.get("main",`prefix_${req.params.id}`)
            let guildid = guild.id
            return res.send(
              res.send(
                dashboardfile
                  .replace("<!gname>", gname)
                  .replace("<!background>", config.website_settings.bg)
                  .replace("<!gicon>", gicon)
                  .replace("<!prefix>", prefix)
                  .replace("<!guildid>", guildid)

              )
            );

          }
        }
      }
      else {
        res.status('401').sendFile(__dirname+"/forbidden.html")
      }
      
    }
    else{
      let b=dash.generateUrl()
      res.redirect(b)
    }
  
  });
  

  app.get("/api/setprefix/:id", async (req, res) => {
    if(config.debug.iplogging == true){
      fs.readFile(
  "/root/home/Nova/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/root/home/Nova/logs/website/DashboardIpLogs.txt`
    );
    abc.write(`${data} \n`);
    abc.write(`${formatted} || ${req.connection.remoteAddress} ||\n `);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
    
  }
);
      debug(
        `Set prefix || type: prefix set || IP: ${req.connection.remoteAddress} || Added to list of known ips`
      );
    }

    if (req.session.act) {
      let b = await dash.getCommonAdminGuilds(req.session.act);

      if (b.includes(req.params.id) == true) {
        bot.db.set(
          "main",
          `prefix_${req.params.id}`,
          req.query.prefix
        );
        res.redirect(`/console/dashboard/${req.params.id}`);
      } else {
        res.status('401').sendFile(__dirname+"/forbidden.html")
      }
    } else {
      let b = dash.generateUrl();
      res.redirect(b);
    }
  });
  const Stats = require("discord-live-stats");

  const client = new Stats.Server(app, {
    bot: {
      name: "Nova",
      icon: "https://cdn.discordapp.com/avatars/896303947311104041/06a3057d95612a58b10c4c11d9c99559.webp?size=2048",
      website: "https://dashboard.nova-bot.tk",
      client_id: "896303947311104041",
      client_secret: config.dash_settings.secret,
    },
    stats_uri: "http://n2.artiom.host:1488/staties", //Base URL
    redirect_uri: "http://n2.artiom.host:1488/callbacks", //Landing Page
    owners: ["845312519001342052", "845312519001342052"],
    authorizationkey: "ppenis",
    login_path: "pop",
  });

  client.on("error", console.log);
};
