const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow();

  win.loadFile('index.html');

  win.webContents.openDevTools(); // убрать потом
};

app.whenReady().then(() => {
  createWindow();
});