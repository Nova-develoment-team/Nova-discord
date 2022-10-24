module.exports = {
  type: "awaitedCommand",
  name: "help-economy",
  code: `$title[💰 Nova economy]
$description[work | for money 
    beg ¦ beg for money
    bal ¦ ballance
    profile ¦ profile
    dep ¦ deopsit money
    with ¦ withdraw
    daily ¦ daily
    opendaily ¦ open daily chest
    heist ¦ heist
    givemoney ¦ share money
    shop ¦ shop for stuff
    open-lucky ¦ open a chest
    rob ¦ rob for money
    steal ¦ steal to get money
    search ¦ search for money
    scrap-car ¦ scrap a car
    scrap-helicopter ¦ scrap a heli
    scrap-truck ¦ scrap a truck
    flip-house ¦ sell a house
    flip-apartment ¦ sell a house
    fish ¦ fish for moey
    lb-bank ¦ bank leaderboard
    lb-wallet ¦ wallet ammount leaderboard]
    $color[$getServerVar[color]]
    $log[[DEBUG] :: $username, used the economy help category command]`,
};
