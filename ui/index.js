const ipcRenderer = require("electron");
let button_closewin = document.getElementById("closewin");
let button_minwin = document.getElementById("minwin");
let button_maxwin = document.getElementById("maxwin");

const sendAsync = function(channel,arg){
    ipcRenderer.send(channel,arg);
};

button_closewin.addEventListener("click",()=>{sendAsync("system","close");});
button_minwin.addEventListener("click",()=>{sendAsync("system","min");});
button_maxwin.addEventListener("click",()=>{sendAsync("system","max");});