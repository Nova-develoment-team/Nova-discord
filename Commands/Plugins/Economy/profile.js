module.exports = {
  name: "profile",
  code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ Discord bots dont have profiles**]
  $thumbnail[$userAvatar[$mentioned[1;yes]]]
  $title[Economy profile]
  $color[$getServerVar[color]]
  $description[
  **__User/ID__**:
  <@$mentioned[1;yes]>
  $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
  (\`$mentioned[1;yes]\`)
   
  **__Chests__**:
  **$getGlobalUserVar[DailyChest;$mentioned[1;yes]]** | Daily
  **$getGlobalUserVar[lucky;$mentioned[1;yes]]** | Lucky
  **$getGlobalUserVar[spiteful;$mentioned[1;yes]]** | Spiteful
   
  **__Flow__**:
  \`💵\` **$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]**
  \`🏦\` **$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]**
  \`📊\` **$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]**
  \`🗡\` **$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]**xp
   
  **__Assets__**:
  \`💼\` ($getGlobalUserVar[duffle;$mentioned[1;yes]]) Bags
  \`📺\` ($getGlobalUserVar[tv;$mentioned[1;yes]]) TVs
  \`📱\` ($getGlobalUserVar[smartphone;$mentioned[1;yes]]) Smartphones
  \`💻\` ($getGlobalUserVar[laptop;$mentioned[1;yes]]) Laptops
  \`🚗\` ($getGlobalUserVar[car;$mentioned[1;yes]]) Cars
  \`🚚\` ($getGlobalUserVar[truck;$mentioned[1;yes]]) Trucks
  \`🚁\` ($getGlobalUserVar[helicopter;$mentioned[1;yes]]) Helicopters
  \`🏫\` ($getGlobalUserVar[apartment;$mentioned[1;yes]]) Apartments
  \`🏡\` ($getGlobalUserVar[house;$mentioned[1;yes]]) Houses
  \`🏰\` ($getGlobalUserVar[mansion;$mentioned[1;yes]]) Mansions
] `,
};
