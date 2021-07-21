import React, { useState, useEffect } from 'react'

export default function App() {
  const [content, setContent] = useState("")

  const handleTextarea = (e) => {
    setContent(e.target.value);
  }

  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <textarea value={content} onChange={handleTextarea} cols={100} rows={10}></textarea>
      </div>

      <div dangerouslySetInnerHTML={{__html: content}} />
    </React.Fragment>
  )
}
