module.exports = {
  type: "interactionCommand",
  name: "avatar",
  code: `
$interactionReply[{title:$username[$findmember[$message;yes]]'s avatar}{image:$avatar[$username[$findmember[$message;yes]]}]`,
};
