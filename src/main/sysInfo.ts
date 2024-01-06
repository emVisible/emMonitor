import { ipcMain } from 'electron'
import osu from 'node-os-utils'
ipcMain.handle('cpu', () => {
  return getCpuMsg()
})

ipcMain.handle('memory', () => {
  return getMemoryMsg()
})


/**
 * 获取CPU信息
 */
const getCpuMsg = async () => {
  return await osu.cpu.usage().then((value) => value)
}

/**
 * 获取内存信息
 */
const getMemoryMsg = async () => {
  // return (await sys.mem()).available
  return await osu.mem.used().then((value) => value.usedMemMb / value.totalMemMb)
}
