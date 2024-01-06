import { ipcMain } from 'electron'
import os from 'node-os-utils'
import SpeedTest from '@cloudflare/speedtest'

ipcMain.handle('cpu', () => {
  return getCpuMsg()
})

ipcMain.handle('memory', () => {
  return getMemoryMsg()
})

ipcMain.handle('net', () => {
  return getNetMsg()
})

/**
 * 获取CPU信息
 */
const getCpuMsg = async () => {
  return await os.cpu.usage().then((value) => value)
}

/**
 * 获取内存信息
 */
const getMemoryMsg = async () => {
  // return (await sys.mem()).available
  return await os.mem.used().then((value) => value.usedMemMb / value.totalMemMb)
}

/**
 * 获取网络信息
 */
const getNetMsg = async () => {
  // return await os.netstat.inOut().then(value=>value)
}
