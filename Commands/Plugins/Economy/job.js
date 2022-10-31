module.exports = ({
    name: "job",
    code: `$if[$message[1]==]
    $description[Hello to get a job do -> >job [Job Name] 
$addfield[Developer;💵1000 - 10000 \n 100 - 400 xp]
$addfield[School-nurse;💵100 - 200 \n 30 - 60 xp]
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
    $endif`
})