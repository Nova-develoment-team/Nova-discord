module.exports = {
  name: "job",
  code: `$if[$message[1]==]
    $description[Hello to get a job do -> >job [Job Name] 
$addfield[Developer;💵1000 - 10000 \n 100 - 400 xp;yes]
$addfield[School-nurse;💵400 - 600 \n 70 - 100 xp;yes]
$addfield[Doctor;💵100000 - 500000 \n 500 - 600 xp;yes]
$addfield[Nurse;💵70000 - 95000 \n 300 - 500 xp;yes]
$addfield[Blogger;💵100 - 300 \n 100 - 250 xp;yes]
$addfield[Streamer;💵500 - 700 \n 400 - 500 xp;yes]
$color[$getServerVar[color]]

    $elseif[$message[1]==Developer]
    $description[You were hired as a developer!]
    $color[GREEN]
    $setGlobalUSerVar[job;developer]
    $onlyif[$getGlobalUserVar[XP]>5000;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    $elseif[$message[1]==School-nurse]
    $description[You were hired as a school nurse!]
    $color[GREEN]
    $setGlobalUSerVar[job;school nurse]
    $onlyif[$getGlobalUserVar[XP]>500;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    $elseif[$message[1]==school-nurse]
    $description[You were hired as a school nurse!]
    $color[GREEN]
    $setGlobalUSerVar[job;school nurse]
    $onlyif[$getGlobalUserVar[XP]>500;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    $elseif[$message[1]==doctor]
    $description[You were hired as a doctor!]
    $color[GREEN]
    $setGlobalUSerVar[job;doctor]
    $onlyif[$getGlobalUserVar[XP]>10000;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    $elseif[$message[1]==Doctor]
    $description[You were hired as a Doctor!]
    $color[GREEN]
    $setGlobalUSerVar[job;doctor]
    $onlyif[$getGlobalUserVar[XP]>10000;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    $elseif[$message[1]==nurse]
    $description[You were hired as a nurse!]
    $color[GREEN]
    $setGlobalUSerVar[job;nurse]
    $onlyif[$getGlobalUserVar[XP]>8000;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    $elseif[$message[1]==blogger]
    $description[You **Became** a blogger!]
    $color[GREEN]
    $footer[what a disapointment]
    $setGlobalUSerVar[job;blogger]
    $onlyif[$getGlobalUserVar[XP]>500;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    $elseif[$message[1]==streamer]
    $description[You **Became** a Streamer!]
    $color[GREEN]
    $setGlobalUSerVar[job;streamer]
    $onlyif[$getGlobalUserVar[XP]>600;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    $endelseif
    
    $endif`,
};
