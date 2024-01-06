import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getCpuMsg:Function,
      getMemoryMsg: Function,
      rClick:Function
    }
  }
}
