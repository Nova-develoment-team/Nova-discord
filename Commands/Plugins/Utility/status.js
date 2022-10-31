module.exports = {
  name: "status",
  code: `$title[Server stats]
$description[
$addField[Dashboard;$jsonRequest[https://dashboard.nova-bot.tk/statusApi;server]]]`,
};
