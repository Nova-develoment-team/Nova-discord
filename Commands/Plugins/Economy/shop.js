module.exports = {
  name: "shop",
  code: `$thumbnail[$authorAvatar]
    $title[Economy Shop]
    $color[$getServerVar[color]]
    $description[
  $addField[
    __Badges:__;
   \`<:badge1:914161692617875456>\` **$1000 | beginner badge**
   \`<:badge3:914161810838519819>\` **$1500 | pro badge**
   \`<:badge2:914161785890828318>\` **$10000 | advanced badge**
  ]
  x
    $addField[
      __Items:__;
    \`💼\` **$250 | bag**
    \`📺\` **$400 | tv**
    \`📱\` **$500 | phone**
    \`💻\` **$1,000 | laptop**
    \`🚗\` **$10,000 | car**
    \`🚚\` **$15,000 | truck**
    \`🚁\` **$20,000 | helicopter**
    \`🏫\` **$50,000 | apartment**
    \`🏡\` **$100,000 | house**
    \`🏰\` **$500,000 | mansion**
    ]
    $addField[__Purchasable chests:__;
    **$250 | lucky**
    **$1,000 | spiteful**
    \`Lucky\` - **Press your luck. Nobody loses!**
    \`Spiteful\` - **Possibility of winning $10,000 but be warned, it could be spiteful! Goodluck!**
    ]]`,
};
