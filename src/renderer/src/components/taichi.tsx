export default (props: { cpu: number; memory: number }) => {
  let cpu = props.cpu
  let memory = props.memory

  return (
    <>
      <div className="yin-yang">
        <section className="yin">
          <div className="cpu">{cpu}%</div>
          <div className="he"></div>
        </section>
        <section className="yang">
          <div className="mem">{memory}%</div>
          <div className="he"></div>
        </section>
      </div>
    </>
  )
}
