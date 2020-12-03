import React from "react"
import Spin from "react-spinkit"
import "react-spinkit/dist/index.css"

const App = () => {
  return (
    <div>
      <button style={{ padding: "6px 8px" }}>
        <Spin type='wave' size='sm' /> Loading...
      </button>
    </div>
  )
}

export default App
