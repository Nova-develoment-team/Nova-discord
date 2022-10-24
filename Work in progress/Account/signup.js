module.exports = {
  name: "signup",
  code: `$title[Hello! Do you want to sign up for nova? If so you get perks like: Daily auto claiming money for economy]
    $description[Please send your email password and username in that order]
    $awaitMessages[$authorID;30s;everything;AccountSetup;Too slow! Pls run again]

    $onlyif[$getUSerVar[account_SignedUp]==false;This account is already signed up]`,
};
