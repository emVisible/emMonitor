import { useEffect, useState } from 'react'
import Taichi from './components/taichi'

function App(): JSX.Element {
  const [cpu, setCPU] = useState(0.0)
  const [memory, setMemory] = useState(0.0)

  const queryStatus = async () => {
    const cpuLoad = (await window.api.getCpuMsg()) as number
    const memoryLoad = (await window.api.getMemoryMsg()) as number
    setCPU(Math.round(cpuLoad))
    setMemory(Math.round(memoryLoad * 100))
  }

  const queryMsg = () => {
    setTimeout(() => {
      queryStatus()
      queryMsg()
    }, 1000)
  }

  useEffect(() => {
    queryMsg()
  })

  return (
    <div className="drag basis">
      <Taichi cpu={cpu} memory={memory}/>
    </div>
  )
}

export default App
