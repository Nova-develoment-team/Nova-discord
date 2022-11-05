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
} = require("../../handler/events/Logger.js");
const ejs = require('ejs')

const command = "./Commands/Plugins"
const user = config.admin_panel_settings.username
const pass = config.admin_panel_settings.password
module.exports = (app, dash, bot, express) => {
  app.set('view engine', 'ejs');



   
    

  function requestid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

app.get('/requestid',async (req, res) => {
  res.redirect(req.query.redirect_uri)
  debug(`New user! redirect: ${req.query.redirect_uri} requestid: ${requestid('8')}`)
  })

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
   
    res.redirect(`/requestid?redirect_uri=/console&rqid=${requestid}`);
    if(config.debug.iplogging == true){
      fs.readFile(
  "./home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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

    var content = fs.readFileSync(__dirname + "/pages/indexalogin.ejs");
    var file = content.toString();
    let guser = await dash.getUser(req.session.act)
    req.infodiscriminator = guser.discriminator;
   req.infoid = guser.id;
    req.infousername = guser.username; 
    req.infoavatar = guser.avatar;

  var content = fs.readFileSync(__dirname + "/pages/index.ejs");
    var file = content.toString();
    res.render(__dirname +'/pages/index.ejs', {
      url: b,
      config: config,
       user: guser,
       user_session: req.sesion.act 
    });
    if(config.debug.iplogging == true){
      fs.readFile(
  "/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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
  "/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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
      const content = fs.readFileSync(__dirname + "/pages/console/dash.ejs");
      const file = content.toString();
      let guser = await dash.getUser(req.session.act)
      req.infodiscriminator = guser.discriminator;
     req.infoid = guser.id;
      req.infousername = guser.username; 
      req.infoavatar = guser.avatar;
      res.render(__dirname +'/pages/console/dash.ejs', {
        user: guser,
        config: config
       })
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
  "/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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
  "/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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
  "/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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
            `<li>
                            <a href="/console/dashboard/${guild.id}/"><input type="image" name="${guild.name}" value="${guild.id}" src="https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png" width="100px" height="100px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'"
                            style="margin: 70px;border: 5px solid #555;border: 5px solid;border-color:#1A2634;border-radius: 50%"  required>
                            <br>
                            <b><p style="color:white;text-align: center;">${guild.name}</p></b></a>
                          </li>`;
        } else if (c.includes(guild.id) == true) {
          bb =
            bb +
`                            <a href="/invite-bot/${guild.id}"><input type="image" name="${guild.name}" value="${guild.id}" src="https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png" width="100px" height="100px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'"
                            style="margin: 70px;border: 5px solid #555;border: 5px solid;border-color:#1A2634;border-radius: 50%
                            "  required>
                            <br>
                            <b><p style="color:white;text-align: center;">${guild.name}</p></b></a>
                          `;
        }
      }
      const selection = fs.readFileSync(__dirname + "/pages/serverselection.ejs");
      const selectfile = selection.toString();
      let guser = await dash.getUser(req.session.act)

      req.infodiscriminator = guser.discriminator;
      req.infoid = guser.id;
       req.infousername = guser.username; 
       req.infoavatar = guser.avatar;
       res.render(__dirname +'/pages/console/serverselection.ejs', {
        user: guser,
        config: config,
        ats: bb.replace("undefined",""),
        manage: aa.replace("undefined","")
       })
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
  "/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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

  const dashboard = fs.readFileSync(__dirname + "/pages/dashboard.ejs");
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
            return    res.redirect("/console/dashboard/"+guild.id)


          }
        }
      }
      else {
        res.status('401').sendFile(__dirname+"/pages/forbidden.ejs")
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
  "/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt",
  "utf8",
  (err, data) => {
    var abc = fs.createWriteStream(
      `/home/runner/Nova-discord/logs/website/DashboardIpLogs.txt`
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
        res.status('401').sendFile(__dirname+"/pages/forbidden.ejs")
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

  app.get('/console/admin/command/edit',  async (req, res) => {
    let pathh = req.query.path
    let name = pathh.replace(/%2F/g, '/')
    pathh = pathh.replace(/%2F/g, ',')
    let code = fs.readFileSync(path.join(process.cwd(), pathh))
   let getuser = await dash.getUser(req.session.act)
        let guser = await dash.getUser(req.session.act)
    req.infodiscriminator = guser.discriminator;
   req.infoid = guser.id;
    req.infousername = guser.username; 
    req.infoavatar = guser.avatar;
  
    if(getuser.id == "845312519001342052"){      
      res.render(__dirname+'/pages/admin/commandedit.ejs', {
        code: code,
        config: config,
      user: guser,
        name: name,
        req: req,
        command: command
      })
}else{
res.send('not admin')
}
    })
  
  
  
  app.post('/command/save', async (req, res) => {
    
  try {
    let name = req.body.path
   name = name.replace(/\//g, path.sep)
    let nowname = command + path.sep + req.body.name
    nowname = nowname.replace(/\//g, path.sep)
  fs.writeFileSync(process.cwd() + path.sep + name, req.body.code)
    fs.renameSync(process.cwd() + path.sep + name, process.cwd() + path.sep + nowname)
    let nowpath = nowname
  
    res.redirect( `/console/admin/command/edit?path=${nowpath.replace('./', '').replace('/','')}`)
  }
  catch (e) {

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  Failed to save command with reason: ${e}
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
  }
  })
  
  
  app.get('/console/admin/login', login, async (req, res) => {
    let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){    res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard LOGIN</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .login-form {
  width: 300px;
  margin: 0 auto;
  font-family: Tahoma, Geneva, sans-serif;
  }
  .login-form h1 {
  text-align: center;
  color: #4d4d4d;
  font-size: 24px;
  padding: 20px 0 20px 0;
  }
  .login-form input[type="password"],
  .login-form input[type="text"] {
  width: 100%;
  padding: 15px;
  border: 1px solid #dddddd;
  margin-bottom: 15px;
  box-sizing:border-box;
  }
  .login-form input[type="submit"] {
  width: 100%;
  padding: 15px;
  background-color: #535b63;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
  }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <div class="login-form">
  <h1>Admin Login</h1>
  <form action="auth" method="POST" encType="application/x-www-form-urlencoded">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" id="password" placeholder="Password" required>
            <input type="checkbox" onclick="show()">Show Password
  <script>
  function show() {
  var x = document.getElementById("password");
  if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }               
  </script>
    <input type="submit">
  </form>
        
  </div>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
}else{
res.redirect('/')}
    })
  
  

         
  
  
  
  
  app.get('/console/admin/dashboard',  async(req,res) => {
  
  let user = await bot.users.fetch('694184230271451166')
  let author = user.username + "#" + user.discriminator
  let user2 = await bot.users.fetch('826320581518557194')
  let author2 = user2.username + "#" + user2.discriminator
  let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){    res.render(__dirname+`/pages/admin/dashboard.ejs`, {
      bot: bot
    })
}else{
res.redirect('/')}
    })
    
  app.get('/console/admin/command',  async(req,res) => {
    let text = ''
  try{       
  function *walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
  if (file.isDirectory()) {
  yield* walkSync(path.join(dir, file.name));
  } else {
  yield path.join(dir, file.name);
  }
  }
  }
  let ff = []
  for (const filePath of walkSync(command)) {
  ff.push(filePath);
  }
  
  for(const rr of ff) {
  let pathh = rr.replace(/\//g, "%2F")
  /*text += `<li><a href="/command/edit?path=${pathh}">
  <button type="button"> <img src="https://cdn.discordapp.com/emojis/837524136837251093.png" width="150" height="50"/><br>
  ${rr}</button></a></li>`*/
  text += `<label><li>
  <a href="/console/admin/command/edit?path=${pathh}"><input type="image" name="guild" src="https://cdn.discordapp.com/emojis/837524136837251093.png" width="150px" height="150px" class="rounded-circle" onerror="this.src='https://cdn.discordapp.com/emojis/837524136837251093.png'" style="margin: 70px;border: 5px solid #ff0000;"  required><br><b><p style="color:white;text-align: center;">${rr}</p></b></a></li></label>`
  }
  }
    catch(e) {
  text = "path is invalid or error occurred"
        }
           let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
    res.render(__dirname+`/pages/admin/command.ejs`,{
      text: text
    })
}else{
res.redirect('/')}
    })
  
  
  app.get('/console/admin/guild', async (req,res) => {
    let server = bot.guilds.cache.map(z=>z)
    let guild = ''
  for(let i = 0;i<server.length;i++){
  /*guild += `<li><a href="/console/admin/guild/info?id=${server[i].id}">
  <button type="button"> <img src="${server[i].iconURL({dynamic: true, size: 4096})}" width="150" /><br>
  ${server[i].name}</button></a></li>`*/
  guild += `<label><li>
  <a href="/console/admin/guild/info?id=${server[i].id}"><input type="image" name="guild" value="${server[i].id}" src="${server[i].iconURL({dynamic: true, size: 4096})}" width="150px" height="150px" class="rounded-circle" onerror="this.src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'" style="margin: 70px;border: 5px solid #ff0000;"  required><br><b><p style="color:white;text-align: center;">${server[i].name}</p></b></a>
          </li></label>`
  
  }
  let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
  res.render(__dirname+`/pages/admin/guild.ejs`, {
    guild: guild
  })
}else{
res.redirect('/')}
  
    })
  
  
  app.get('/console/admin/guild/info',  async (req,res) => {
    let info = ''
    try {
  let guild = bot.guilds.cache.get(req.query.id)
  info = `Id: ${guild.id}<br>Name: ${guild.name}<br>Owner Id: ${guild.ownerId}<br>Members count: ${guild.memberCount}<br>Features: ${guild.features.join(', ')}`
        }
    catch (e) {
        info = "error occurred: " + e
        }
        let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
    res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>GUILD INFO</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>    <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>   
    <a href="/console/admin/shell">Shell</a>    
    <a href="/console/admin/djseval">DjsEval</a>   
    <a href="/console/admin/aoieval">AoiEval</a>   
    <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  ${info}
  <br> <br> <br>
  <a href="/guild/leave?id=${req.query.id}" onclick="return confirm('Are you sure want to leave ${bot.guilds.cache.get(req.query.id).name} guild?')">
  <button type="button" style="text-align:center;background-color:red;height:30;width:30">Leave This Guild!</button></a>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
}else{
res.redirect('/')}
    })
  
  
  app.get('/command/update', async (req, res) => {
    bot.loader?.update()
    res.redirect('/command')
    })
  
  app.get('/command/create',  async (req, res) => {
    let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){    res.send(`
  <!DOCTYPE html>
  <html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
  <head>
  <title>EDIT COMMAND</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
    <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>   
    <a href="/console/admin/shell">Shell</a>    
    <a href="/console/admin/djseval">DjsEval</a>   
    <a href="/console/admin/aoieval">AoiEval</a>   
    <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <form action='/command/create' method='post'>
        <input type="text" name="name" placeholder="Command name" value="your command name.js" required>
        <br>
       
  <textarea name="code" id="code" placeholder="your aoi.js code"></textarea>
  
  <button class="btn" type="submit">Create</button>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  <script>
  window.onload = function () {
  var editor = CodeMirror.fromTextArea($("#code")[0], {
    lineNumbers: true,
    lineWrapping: true,
    mode: 'javascript',
    theme: 'monokai'
  });
  };
  </script>
  </body>
  </html>
  `)
}else{
res.redirect('/')}
    }) 
  
  app.post('/command/create',  async (req, res) => {
    try{
    let nowname = command + '/' + req.body.name
    nowname = nowname.replace(/\//g, path.sep)
  nowname = nowname.replace('./','')
    fs.writeFileSync(process.cwd() + path.sep + nowname, req.body.code)
    let nowpath = nowname.replace(/,/g, '%2F')
   
    res.redirect( `/command/edit?path=${nowpath}`)
        }
    catch (e) {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
      <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>   
    <a href="/console/admin/shell">Shell</a>    
    <a href="/console/admin/djseval">DjsEval</a>   
    <a href="/console/admin/aoieval">AoiEval</a>   
    <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  ERROR OCCURRED: ${e}
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
  
        }
  })
  
  
  
  app.get('/command/delete',  async (req, res) => {
   try {
       let pathh = req.query.path
       pathh = pathh.replace(/%2F/g, path.sep)
       fs.unlinkSync(path.join(process.cwd(), pathh))
       res.redirect('/command')
       }
   catch (e) {
     let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
   res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
      <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>   
    <a href="/console/admin/shell">Shell</a>    
    <a href="/console/admin/djseval">DjsEval</a>   
    <a href="/console/admin/aoieval">AoiEval</a>   
    <a href="/console/admin/stats">BotStats</a>  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  ERROR OCCURRED: ${e}
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
}else{
res.redirect('/')}
   }
  
   })
  
      
  app.get('/guild/leave',  async (req,res) => {
    try { 
        bot.guilds.cache.get(req.query.id).leave()
        res.redirect( '/guild')
        }
    catch (e) {
       let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){        res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
     <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>   
    <a href="/console/admin/shell">Shell</a>    
    <a href="/console/admin/djseval">DjsEval</a>   
    <a href="/console/admin/aoieval">AoiEval</a>   
    <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  Failed to leave guild with reason: ${e}
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
  
}else{
res.redirect('/')}
      }
      
    })
  
  
  
  
  
  app.get('/console/admin/shell',  async(req, res) => {
    
    let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
    <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>   
    <a href="/console/admin/shell">Shell</a>    
    <a href="/console/admin/djseval">DjsEval</a>   
    <a href="/console/admin/aoieval">AoiEval</a>   
    <a href="/console/admin/stats">BotStats</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <div align=center>
  <form action="shellexec" method='post' autocomplete='off'>
  <input autocomplete="false" type="textarea" name="hidden" style="display:none">
  <input type='text' name='execute' placeholder='Type command to send to server' autocomplete='false' style="width:100" size="50">
  <input type='submit' value='Send!'>
  </form>
  </div>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)}else{
  res.redirect('/')  }
  
  })
  
  app.post('/shellexec',  async(req, res) => {
  const exec = require('child_process')
  let result = '';
    try {
        result = await exec.execSync(req.body.execute).toString().replace(/\n/g, '<br>')
        }
    catch (e) {
        result = e
        }

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
  <a href="/console/admin/command">Command</a>   <a href="/console/admin/guild">Guild</a>   <a href="/console/admin/shell">Shell</a>    <a href="/console/admin/djseval">DjsEval</a>   <a href="/console/admin/aoieval">AoiEval</a>   <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <p style="padding: 10px; border: 2px solid white;">${result}</p>
  <form action="shellexec" method='post' autocomplete='off'>
  <input autocomplete="false" type="text" name="hidden" style="display:none">
  <input type='text' placeholder='Type command to send to server' autocomplete='false' name='execute' style="width:50">
  <input type='submit' value='Send!'>
  </form>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
  })
  
  app.get('/console/admin/djseval',  async(req, res) => {
    let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
  res.send(`
  <!DOCTYPE html>
  <html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a>
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <form action="djseval" method='post' autocomplete='off'>
  <textarea name='execute' id='execute' placeholder='Your node js code here' autocomplete='false'></textarea>
  <input type='submit' value='Send!'>
  </form>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  <script>
  window.onload = function () {
  var editor = CodeMirror.fromTextArea($("#execute")[0], {
    lineNumbers: true,
    lineWrapping: true,
    mode: 'javascript',
    theme: 'monokai'
  });
  };
  </script>
  </body>
  </html>
  `)
}else{
res.redirect('/')}
  })
  
  app.post('/djseval',  async(req, res) => {
  let result;
    try {
        const client = bot
        result = await eval(req.body.execute)
    
        }
    catch (e) {
        result = e
        }
  res.send(`
  <!DOCTYPE html>
  <html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
      <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>  
    <a href="/console/admin/shell">Shell</a>   
    <a href="/console/admin/djseval">DjsEval</a>  
    <a href="/console/admin/aoieval">AoiEval</a>  
    <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <p style="padding: 10px; border: 2px solid white;">${require('util').inspect(result, {depth:0}).replace(/\n/g, '<br>')}</p>
  <form action="djseval" method='post' autocomplete='off'>
  <textarea placeholder='Type command to send to server' autocomplete='false' name='execute' id='execute'>${req.body.execute}</textarea>
  <div align=center>
  <input type='submit' value='Send!' style="background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;">
  </div>
  </form>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  <script>
  window.onload = function () {
  var editor = CodeMirror.fromTextArea($("#execute")[0], {
    lineNumbers: true,
    lineWrapping: true,
    mode: 'javascript',
    theme: 'monokai'
  });
  };
  </script>
  </body>
  </html>
  `)
  
  })
  
  
  app.get('/console/admin/aoieval',  async(req, res) => {
    let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
  res.send(`
  <!DOCTYPE html>
  <html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
      <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>  
    <a href="/console/admin/shell">Shell</a>   
    <a href="/console/admin/djseval">DjsEval</a>  
    <a href="/console/admin/aoieval">AoiEval</a>  
    <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <form action="aoieval" method='post' autocomplete='off'>
  <textarea name='execute' id='execute' placeholder='Your aoi js code here' autocomplete='false'></textarea>
  <input type='submit' value='Send!'>
  </form>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  <script>
  window.onload = function () {
  var editor = CodeMirror.fromTextArea($("#execute")[0], {
    lineNumbers: true,
    lineWrapping: true,
    mode: 'javascript',
    theme: 'monokai'
  });
  };
  </script>
  </body>
  </html>
  `)
}else{
res.redirect('/')}
  })
  
  app.post('/aoieval',  async(req, res) => {
  let result;
    try {
        const client = bot
  
  result = await client.functionManager.interpreter(
                client,
                {},
                [],
                {
                    name: "aoi Eval",
                    code: `${req.body.execute}`,
                },
                client.db,
                true,
            )
  
    result = result.code
        }
    catch (e) {
        result = e
        }
  res.send(`
  <!DOCTYPE html>
  <html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/codemirror.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.29.0/mode/javascript/javascript.js"></script>
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css">
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
  <a href="/command">Command</a>
  <a href="/guild">Guild</a>
  <a href="/shell">Shell</a> 
  <a href="/djseval">DjsEval</a>
  <a href="/aoieval">AoiEval</a> <a href="/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <p style="padding: 10px; border: 2px solid white;">${require('util').inspect(result, {depth:0}).replace(/\n/g, '<br>')}</p>
  <form action="aoieval" method='post' autocomplete='off'>
  <textarea placeholder='Type command to send to server' autocomplete='false' name='execute' id='execute'>${req.body.execute}</textarea>
  <input type='submit' value='Send!'>
  </form>
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  <script>
  window.onload = function () {
  var editor = CodeMirror.fromTextArea($("#execute")[0], {
    lineNumbers: true,
    lineWrapping: true,
    mode: 'javascript',
    theme: 'monokai'
  });
  };
  </script>
  </body>
  </html>
  `)
  
  })
  
  
  app.get('/reboot',  async(req,res) => {
    let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
  await res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  ri
  ght: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
    <a href="/console/admin/command">Command</a>   
    <a href="/console/admin/guild">Guild</a>  
    <a href="/console/admin/shell">Shell</a>   
    <a href="/console/admin/djseval">DjsEval</a>  
    <a href="/console/admin/aoieval">AoiEval</a>  
    <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  The server/process is restarting, this dashboard should be offline for a few seconds, if your bot not coming online for a more than 2 minute, you can check it on your hosting panel
  <script>
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
}else{
  res.redirect('/')
}
   
   process.on("exit", () => {
       
       require("child_process").spawn(process.argv.shift(), process.argv, {
            cwd: process.cwd(),
            detached: true,
            stdio: "inherit",
        });
    });
    process.exit();
   })
  
  
  app.get('/json/stats',  async(req,res) => {
  let client = bot
  let days = Math.floor(client.uptime / 86400000);
  
  let hours = Math.floor(client.uptime / 3600000) % 24;
  
  let minutes = Math.floor(client.uptime / 60000) % 60;
  
  let seconds = Math.floor(client.uptime / 1000) % 60;
  const initial = process.cpuUsage();
  const start = Date.now();
  while (Date.now() - start > 1) ; 
  const final = process.cpuUsage(initial);
  let cpu = ((final.user + final.system) / 1000).toFixed(2);
  res.json({
  "ram": process.memoryUsage().rss / 1024 / 1024,
  "uptime": days + "d " +  hours + "h " + minutes + "m " +  seconds + "s ",
  "cpu": cpu
  
  })
  })
  
  
  app.get('/console/admin/stats',async(req,res) => {
    let getuser = await dash.getUser(req.session.act)
    if(getuser.id == "845312519001342052"){
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
          background-color: #001f3f;
            color: #F5F5F5;
                }
  .topnav {
  overflow: hidden;
  background-color: #333;
  }
  .topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  }
  .topnav a:hover {
  background-color: #ddd;
  color: black;
  }
  .topnav a.active {
  background-color: #04AA6D;
  color: white;
  }
  .topnav .icon {
  display: none;
  }
  @media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
  float: right;
  display: block;
  }
  }
  @media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
  }
  .topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  }
  }
  </style>
  </head>
  <body>
  <div class="topnav" id="myTopnav">
  <a href="/console/admin/dashboard" class="active">dashboard</a>
  <a href="/console/admin/command">Command</a>
  <a href="/console/admin/guild">Guild</a>
  <a href="/console/admin/shell">Shell</a> 
  <a href="/console/admin/djseval">DjsEval</a>
  <a href="/console/admin/aoieval">AoiEval</a>
  <a href="/console/admin/stats">BotStats</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>
  <div id="stats"></div>
  <script>
  function stats() {
  
  fetch('/json/stats')
  .then(result => result.json())
  .then((output) => {
    document.getElementById("stats").innerHTML = \`
  Ram usage: \${output.ram}MB<br>
  Cpu usage: \${output.cpu}%<br>
  Uptime: \${output.uptime}
    \`
  });
  }
  setInterval(stats, 1000)
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }
  </script>
  </body>
  </html>
  `)
}else{
res.redirect('/')}
  })
  
   app.get("/login", async (req, res) => {
     if(req.session.act){
       res.redirect('/')
     }else{
   let b = dash.generateUrl();
      res.redirect(b);
      debug('New request on /login')
     }
    })
  function islogin(req,res,next) {
    if(req.session.user==user && req.session.pass==pass){
        return next()
        }
  else {
     res.redirect('/')
     }
    }
  
  
  function login(req,res,next) {
    if(req.session.user!=user || req.session.pass!=pass){
        return next()
        }
  else {
     res.redirect('/console/admin/dashboard')
     }
    }
  
  function al(port){
  if (bot) {
  app.listen(port)
  }
  else{
  al(port)
  }
  }
  
  al()
    
};