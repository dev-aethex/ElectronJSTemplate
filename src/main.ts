const { app, BrowserWindow } = require('electron');
const path = require('path');
const fileSystem = require("fs");
var config = require("../config.json");

class Main {
    constructor() {
        app.on("ready", () => {
            this.buildWindow();
        });

        app.on("activate", () => {
            if(BrowserWindow.getAllWindows == 0) {
                this.buildWindow();
            }
        });

        app.on('window-all-closed', () => {
            if (process.platform !== "darwin") {
                app.quit();
            }
        });
    }
    buildWindow() {
        var window = new BrowserWindow({
            width: config.width,
            height: config.height,
            frame: false,
            minWidth: config.minWidth,
            minHeight: config.minHeight,
            icon: config.icon
        });
        window.setResizable(config.resizable);
        window.loadFile("./src/VueJS/dist/index.html");
    }
}

var main = new Main();