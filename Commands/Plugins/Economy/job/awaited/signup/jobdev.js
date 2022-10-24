module.exports = {
  name: "job",
  type: "awaitedCommand",
  code: `
    $description[You were hired as a developer!]
    $color[GREEN]
    $setGlobalUSerVar[job;developer]
    $onlyif[$getGlobalUserVar[XP]>5000;You don't have enough XP to get a job! Go fish to get some xp]
    $onlyif[$getGlobalUserVar[job]==none;Ah oh! You have a job already, try quiting it with >quit [Job name] (Note: You cant get a job imediatly after you quit one)]
    
    Please verify you are a human by sending "~~$randomString[$random[10;15]]~~"
    $if[$message[1]!=$randomString[$random[10;15]]]
    Incorrect try again
    $endif`,
};
