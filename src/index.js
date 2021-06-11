const { app, BrowserWindow, remote } = require('electron');
const path = require('path');
const ipc = require("electron").ipcMain;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1500,
        height: 800,
        frame: false,
        minHeight: 200,
        minWidth: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: __dirname + "/icon.ico"
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    ipc.on("ELECTRON_frame_minimize", (event, data) => {
        mainWindow.minimize();
    });

    ipc.on("ELECTRON_frame_fullScreen", (event, data) => {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
    });

    ipc.on("ELECTRON_frame_close", (event, data) => {
        mainWindow.close();
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    } 
});