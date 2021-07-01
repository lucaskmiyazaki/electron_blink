const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
const express = require('express');
const route = express();
const port = 3100;


route.listen(port, () => {
    console.log(`Electron app listening at http://localhost:${port}`)
});

route.post('/cmd', (req, res) => {
    console.log("aqui");
    res.end();
});
 
let mainWindow;
 
function createWindow() {
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false
    });
    const startURL = 'http://localhost:3000' ;
 
    mainWindow.loadURL(startURL);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
app.on('ready', createWindow);