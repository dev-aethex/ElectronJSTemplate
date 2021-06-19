import { ipcRenderer } from "electron";

export class MainProcessIpc {
    public static send(response: JSON) {
        ipcRenderer.send("Hi");
    }
}