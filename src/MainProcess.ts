import { ipcRenderer } from "electron";

export class MainProcess {
    production: boolean;

    socket: WebSocket|null;
    
    /**
     * Communicate between the ElectronJS main process via JSON
     */
    constructor() {
        // Initialize variables
        this.socket = null;

        // Check if VueJS is in production mode
        if (process.env.NODE_ENV == "production") {
            this.production = true;
            return;
        }

        // Connect to the electron main process WebSocket API
        this.production = false;
        this.socket = new WebSocket("ws://localhost:8090");
    }

    /**
     * 
     * @param {JSON} response Response to send to the ElectronJS main process 
     * @returns 
     */
    send(response: JSON) {
        if (this.production == true) {
            ipcRenderer.send("");
            return;
        }

        // Send message from development socket
        if (this.socket != null) {
            this.socket.send(JSON.stringify(response));
        }
    }
}