Required envs:

Lavalink_Host
Lavalink_host_password
apikey
db_uri
token

If you dont have a lavalink server use these creds

lavalink-node-2-1.nova-team.repl.co
NovaLavalink

change:

```js
bot.createLavalinkConnection(
  config.lava_settings.Host,
  config.lava_settings.Host_password,
  true,
  false
);
```

to:

```js
bot.createLavalinkConnection(
  config.lava_settings.Host,
  config.lava_settings.Host_password,
  true,
  true
);
```

Also if you dontt have a MongoDB server use this
mongodb://admin:XZRyELujMW@n2.luxxy.host:1802?authSource=admin
