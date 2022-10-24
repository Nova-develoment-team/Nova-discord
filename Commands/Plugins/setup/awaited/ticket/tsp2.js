module.exports = {
  type: "awaitedCommand",
  name: "tsp2",
  code: `
   **✅ Setup ticket is complete**
    $setServerVar[ticketchannel;$message]
    $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
    $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]
    
    $setServerVar[ticketsetup;true]`,
};
