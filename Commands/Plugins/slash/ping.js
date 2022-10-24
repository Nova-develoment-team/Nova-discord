module.exports = {
  type: "interactionCommand",
  name: "ping",
  code: `

    $interactionreply[{description:Websocket Ping: $pingms
        Database  Ping: $dbPingms
        }{color:$getServerVar[color]}]
   
    `,
};
