const DashButton = require("dash-button");
const MilkCocoa = require('milkcocoa');

const milkcocoa = new MilkCocoa('blueiwp41pkk.mlkcca.com');//ここのapp-idは自分のmilkcocoaのid

const ds = milkcocoa.dataStore('messages');

const PHY_ADDR = "34:d2:70:85:64:80"; //dashボタンのアドレス

let button = new DashButton(PHY_ADDR);

button.addListener(() => {
  ds.push({content : 'dash!'});
  console.log("dash!");
});
