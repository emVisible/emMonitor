import { useState } from 'react'

function App(): JSX.Element {
  const [cpu, setCpu] = useState(0)
  const [memory, setMemory] = useState(0)
  const [net, setNet] = useState(0)

  const queryStatus = async () => {
    const res1 = await window.api.getCpuMsg()
    const res2 = await window.api.getMemoryMsg()
    const res3 = await window.api.getNetMsg()
    console.log('res1', res1)
    console.log('res2', res2)
    console.log('res3', res3)
  }

  setTimeout(() => {
    queryStatus()
  }, 0)
  return (
    <div className="drag">
      <section>CPU{cpu} %</section>
      <section>Memory{memory} %</section>
      <section>Net {net} %</section>
    </div>
  )
}

export default App
