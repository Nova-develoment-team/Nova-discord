module.exports = ({
    name: "work", 
  code: `$if[$getGlobalUserVar[job]==none]
  You don't have a job yet go find a job, by doing >job
  $endif
  
  $if[$getGlobalUserVar[job]==developer]
  $color[GREEN]
  $description[You coded, you fixed some bugs and got $random[1000;10000] coins and $random[10;40] xp]
  $setGlobalUserVar[Wallet;$sum[$random[1000;10000];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[100;400];$getGlobalUserVar[XP]]]
  $endif

   
  $if[$getGlobalUserVar[job]==school nurse]
  $color[GREEN]
  $description[You fed $random[10;20] Students and got $random[100;200] coins and $random[30;60] xp]
  $setGlobalUserVar[Wallet;$sum[$random[100;200];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[30;60];$getGlobalUserVar[XP]]]
  $endif
`
  
})