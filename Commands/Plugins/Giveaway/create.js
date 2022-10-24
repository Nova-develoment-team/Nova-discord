module.exports = [
  {
    name: "giveaway",
    code: `$editmessage[$get[e];{author:🎉 GIVEAWAY (ENDED) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won **$get[prize]**;no]
$onlyif[$getmessagevar[ended]==false;]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$wait[$get[time]]
$setmessagevar[endstamp;$get[endstamp];$get[e]]
$setmessagevar[hoster;$authorid;$get[e]]
$setmessagevar[prize;$get[prize];$get[e]]
$let[e;$apimessage[$channelid;;{author:🎉 GIVEAWAY 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Nº Winners:** 1\n**Ends** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**No one** has joined this giveaway}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE};{actionRow:🎊 Join 🎊,2,3,join:🔁 Reroll 🔁,2,1,reroll:🔚 End 🔚,2,4,end};;yes]]
$let[endstamp;$sum[$datestamp;$ms[$get[time]]]]
$let[prize;$messageslice[1]]
$onlyif[$ms[$get[time]]!=undefined;Invalid time provided]
$let[time;$message[1]]
    $onlyif[$message[2]!=;Enter a time and a prize]`,
  },
  {
    type: "interactionCommand",
    name: "end",
    prototype: "button",
    code: `$editmessage[$get[e];{author:🎉 GIVEAWAY (FORCE ENDED) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner After Force End:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
    $sendmessage[Congratulations <@$get[winner]>! You won the giveaway(force ended) of **$get[prize]**;no]
    $onlyif[$get[winner]!=;No winner decided due to lack of participation]
    $setmessagevar[ended;true;$get[e]]
    $let[winner;$randomtext[$joinsplittext[;]]]
    $removetextsplitelement[$gettextsplitlength]
    $textsplit[$getmessagevar[joinedusers;$get[e]];@]
    $let[participated;$getmessagevar[joined;$get[e]]]
    $let[e;$get[msg]]
    $onlyif[$get[condition]==perform;]
    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Ended the giveaway];true;This giveaway has already ended];false;You do not have enough perms];;;64]
    $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
    $let[condition;$hasperms[$authorid;manageserver]]
    $let[host;$getmessagevar[hoster;$get[msg]]]
    $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
    $let[prize;$getmessagevar[prize;$get[msg]]]
    $let[msg;$interactiondata[message.id]]`,
  },
  {
    type: "interactionCommand",
    name: "join",
    prototype: "button",
    code: `$editmessage[$get[msg];{author:🎉 GIVEAWAY 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Hosted By#COLON#** <@$get[host]>\n**Nº Winners:** 1\n**Ends** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users have participated in this giveaway.}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE}]
    $setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
    $setmessagevar[joined;$get[participated];$get[msg]]
    $onlyif[$get[condition]==false;]
    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;Joined the giveaway];true;You have already joined the giveaway];ended;The giveaway ended];;;64]
    $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
    $let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
    $let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
    $let[host;$getmessagevar[hoster;$get[msg]]]
    $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
    $let[prize;$getmessagevar[prize;$get[msg]]]
    $let[msg;$interactiondata[message.id]]`,
  },
  {
    type: "interactionCommand",
    name: "reroll",
    prototype: "button",
    code: `$editmessage[$get[e];{author:🎉 GIVEAWAY (REROLLED) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner After Reroll:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
    $sendmessage[Congratulations <@$get[winner]>! You won the reroll of **$get[prize]**;no]
    $onlyif[$get[winner]!=;No winner decided due to lack of participation]
    $setmessagevar[ended;true;$get[e]]
    $let[winner;$randomtext[$joinsplittext[;]]]
    $removetextsplitelement[$gettextsplitlength]
    $textsplit[$getmessagevar[joinedusers;$get[e]];@]
    $let[participated;$getmessagevar[joined;$get[e]]]
    $let[e;$get[msg]]
    $onlyif[$get[condition]
    })==perform;]
    $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Rerolled the giveaway];true;This giveaway has not ended yet];false;You do not have enough perms];;;64]
    $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
    $let[condition;$hasperms[$authorid;manageserver]]
    $let[host;$getmessagevar[hoster;$get[msg]]]
    $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
    $let[prize;$getmessagevar[prize;$get[msg]]]
    $let[msg;$interactiondata[message.id]]`,
  },
];
