import { Menu, MenuItemConstructorOptions, Tray } from 'electron'
import path from 'path'

const createTary = () => {
  Menu.setApplicationMenu(null)
  const isMac = process.platform == 'darwin'
  const tray = new Tray(path.resolve(__dirname, isMac ? '../../resources/mac@wx.png' : '../../resources/win.png'))

  const template = [
    isMac ? { label: 'Exit/退出', role: 'close' } : { role: 'quit', label: 'Exit/退出' },
  ] as MenuItemConstructorOptions[]

  const menu = Menu.buildFromTemplate(template)
  tray.setToolTip('emMonitor')
  tray.setContextMenu(menu)
}

export { createTary }

