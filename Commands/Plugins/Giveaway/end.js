module.exports = {
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
};
