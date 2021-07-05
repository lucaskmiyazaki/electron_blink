const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
const express = require('express');
const childProcess = require('child_process');
const route = express();
const port = 3100;


route.listen(port, () => {
    console.log(`Electron app listening at http://localhost:${port}`)
    
});

route.post('/on', (req, res) => {
    childProcess.exec("echo -e -n '1' > /dev/ttyACM0");
    res.end();
});

async function getSerial(){
    let resp;
    while (!resp){
        child = childProcess.exec("cat < /dev/ttyACM0");
        console.log(resp);
    }
    return resp;
}

route.post('/off', (req, res) => {
    childProcess.exec("echo -e -n '0' > /dev/ttyACM0");
    //getSerial();
    let waiting = true;
    while(waiting){
        let child = childProcess.exec("cat < /dev/ttyACM0");
        child.stdout.on('data', function(data) {
            console.log('stdout: ==== ' + data);
            waiting=false;
            //if (data.includes('0')){
            //    waiting = false;
            //}
        });    
    }
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