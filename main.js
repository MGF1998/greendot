const {app,BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");
let win; 

function createWindow(w,h,target) {
    win = new BrowserWindow({width: w, height: h, frame: true});
    win.loadURL(url.format({
        pathname: path.join(__dirname, target),
        protocol: 'file:',
        slashes: true
    }));
    win.on("closed", () =>{
        win = null;
    });
}

app.on("ready",()=>{createWindow(800,600,"ui/index.html");});
app.on("window-all-closed", ()=>{
    if (process.platform !== 'darwin') { //if it's on an Apple, it shouldn't quit - see Electron docs
        app.quit();
    }
});
app.on("activate", ()=>{ //also explicitly for apple devices
    if (win === null) {
        createWindow(800,600,"ui/index-html");
    }
});