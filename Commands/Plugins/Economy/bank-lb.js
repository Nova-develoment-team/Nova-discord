module.exports = {
  name: "lb-bank",
  code: `$title[**__🏦 Bank leaderboard__** 
    $globalUserLeaderboard[Bank;asc]]
    $color[$getServerVar[color]]
    $footer[You have $$numberSeparator[$getGlobalUserVar[Bank;$authorID]] 💵 in your bank]`,
};
