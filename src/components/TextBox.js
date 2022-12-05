function TextBox({height, json, setJson}) {
  return (
    <div className="w-full p-2 pr-0" style={{height: height}}>
        <textarea className="w-full border-solid border-2 border-sky-500 h-full" value={json} onChange={e => setJson(e.target.value)}></textarea>
    </div>
  )
}

export default TextBox
