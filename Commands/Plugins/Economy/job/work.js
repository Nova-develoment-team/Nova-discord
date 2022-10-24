module.exports = {
  name: "work",
  code: `

  $if[$getGlobalUserVar[job]==none]
  You don't have a job yet go find a job, by doing >job
  $endif
  
  $if[$getGlobalUserVar[job]==developer]
  $color[GREEN]
  $description[You found a bug in $randomtext[ubuntu;arch linux;kubuntu;debian] you did a pull request in there git, the devs thanked you for your efforts and gave you $random[1000;10000] coins and $random[100;400] xp]
  $setGlobalUserVar[Wallet;$sum[$random[1000;10000];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[100;400];$getGlobalUserVar[XP]]]
  $endif

   
  $if[$getGlobalUserVar[job]==school nurse]
  $color[GREEN]
  $description[$randomText[today you helped a total of $random[5;7] students, you got your paycheck you got $$random[400;600] and $sum[$random[70;100] xp];a student was sick you treated him, you got your paycheck you got $$random[400;600] and $sum[$random[70;100] xp]]
  $setGlobalUserVar[Wallet;$sum[$random[400;600];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[70;100];$getGlobalUserVar[XP]]]
  $endif

  $if[$getGlobalUserVar[job]==doctor]
  $color[GREEN]
  $description[You treated a total of $random[50;90] patients and you got $random[100000;500000] coins and $random[500;600] xp]
  $setGlobalUserVar[Wallet;$sum[$random[100000;500000];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[500;600];$getGlobalUserVar[XP]]]
  $endif
  
  $if[$getGlobalUserVar[job]==nurse]
  $color[GREEN]
  $description[You hepled $random[10;20] patients and got $random[70000;95000] coins and $random[300;500] xp]
  $setGlobalUserVar[Wallet;$sum[$random[70000;95000];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[300;500];$getGlobalUserVar[XP]]]
  $endif

  $if[$getGlobalUserVar[job]==blogger]
  $color[GREEN]
  $description[You posted a blog on you website and got $random[50;70] users and got $random[100;300] coins and $random[100;250] xp]
  $setGlobalUserVar[Wallet;$sum[$random[100;300];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[100;250];$getGlobalUserVar[XP]]]
  $endif

  $if[$getGlobalUserVar[job]==streamer]
  $color[GREEN]
  $description[You started streaming and you got many donations, and got in total $random[400;500] coins and $random[100;250] xp]
  $setGlobalUserVar[Wallet;$sum[$random[500;700];$getGlobalUserVar[Wallet]]]
  $setGlobalUservar[XP;$sum[$random[400;500];$getGlobalUserVar[XP]]]
  $endif
`,
};
