const DashButton = require("dash-button");
const SlackNode = require('slack-node');
const slack = new SlackNode();

const webHookUrL = "SLACK URL";

slack.setWebhook(webHookUrL);
const PHY_ADDR = "34:d2:70:85:64:80"; //dashボタンのアドレス

let button = new DashButton(PHY_ADDR);

const serif = ["メッセージ"];
const photo = ["写真URL"];

button.addListener(() => {
    let text = "送りたい文章";

    slack.webhook({
        username: "NAME",
        icon_emoji: "ICON",
        text: text
    }, function(err, res) {
        console.log(err);
    });
    console.log("dash!");
});
