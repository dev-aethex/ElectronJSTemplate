const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const http = require('http');
const { server } = require('websocket');

app.on("ready", () => {
    let window = new BrowserWindow({
        width: 1000,
        height: 500,
        frame: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    if (isDev) {
        (async () => {
            const HTTPServer = http.createServer();
            HTTPServer.listen(8090);

            const webSocketServer = new server({
                httpServer: HTTPServer
            });

            webSocketServer.on("request", (request) => {
                const connection = request.accept(null, request.origin);

                connection.on("message", (message) => {
                    var response = JSON.parse(message.utf8Data);
                    if (response.for == "electron") {
                        if (response.command == "windowClose") {
                            window.close();
                        }
                    }
                });
            });
            window.loadURL("http://localhost:8080");
        })();
    } else {
        window.loadFile(path.join(__dirname, "../dist/index.html"));
    }
});