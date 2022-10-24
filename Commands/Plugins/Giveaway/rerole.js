module.exports = {
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
};
