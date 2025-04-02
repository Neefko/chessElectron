const { app, BrowserWindow, ipcMain } = require('electron');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Включаем nodeIntegration
      nodeIntegrationInWorker: true, // Разрешаем использование require в WebWorkers
      contextIsolation: false, // Отключаем isolation для использования require
    }
  });

  win.loadFile('index.html');
  win.webContents.openDevTools(); // Убрать потом
};

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on('close-win', () => {
  if (win) win.close();
});