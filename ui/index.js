const $ = require("jQuery");
const {ipcRenderer} = require("electron");
const sendAsync = function (channel, arg) {
    console.log(typeof arg);
    ipcRenderer.send(channel, arg);
    console.log("sending async message " + arg + " on channel " + channel);
};

$("#closewin").click(() => {
    sendAsync("system", "close");
});
$("#minwin").click(() => {
    sendAsync("system", "min");
});
$("#maxwin").click(() => {
    sendAsync("system", "max");
});
$("#drawer").click(()=>{ 
    $("nav").toggleClass("hidden");
    $("nav span").fadeToggle();
});
