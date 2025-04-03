const { app, BrowserWindow, ipcMain } = require('electron');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, 
    }
  });

  win.loadFile('./html/main.html');
  win.webContents.openDevTools(); // Убрать потом
};

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on('close-win', () => {
  win.close();
});