const { app, BrowserWindow, Menu, shell, } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('src/index.html')
  //win.webContents.openDevTools();
}

const templateMenu = [
  {
    label: 'início', 
    submenu: [
      {
        label: 'apresentação',
        click(menuItem, BrowserWindow, event) {
          BrowserWindow.loadURL(`file://${__dirname}/index.html`)
        }
      }
    ]
  },
  
  {
    label: 'Cadastro',
    submenu: [
      {
        label:'Banda',
        click: function() {
          shell.openExternal('https://www.electronjs.org/');
        }
      }, 
      {
        label:'Cantor'
        
      }
    ]
  },
  {
    label:'Relatório',
    submenu: [
      {
        label:'Bandas',
        
      }, 
      {
        label:'Cantores',
        click(menuItem, BrowserWindow, event) {
          BrowserWindow.loadURL(`file://${__dirname}/integrantes.html`)
        }
      }
    ]
  },
  {
    label: 'contato',
    click(menuItem, BrowserWindow, event) {
      BrowserWindow.loadURL(`file://${__dirname}/contato.html`)
    }
  }
];

const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu)

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
