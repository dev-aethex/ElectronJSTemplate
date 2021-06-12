const { app, BrowserWindow, remote } = require('electron');
const path = require('path');
const ipc = require("electron").ipcMain;
const fileSystem = require("fs");

if (require('electron-squirrel-startup')) { 
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1500,
        height: 800,
        frame: false,
        minHeight: 200,
        minWidth: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true
        },
        icon: __dirname + "/icon.ico"
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    ipc.on("ELECTRON_frame_minimize", (event, data) => {
        mainWindow.minimize();
    });

    ipc.on("ELECTRON_frame_fullScreen", (event, data) => {
        if (mainWindow.isMaximized()) {
            mainWindow.restore();
            return null;
        }
        mainWindow.maximize();
        console.log(mainWindow.isMaximized());
    });

    ipc.on("ELECTRON_frame_close", (event, data) => {
        mainWindow.close();
    });

    ipc.on("ELECTRON_contentLoad", (event, data) => {
        fileSystem.readFile(__dirname + "\\html\\index.html", "utf8", (error, data) => {
            event.reply("ELECTRON_contentLoaded", data);
        });
    });
};
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    } 
});