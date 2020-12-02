import React from "react"
import Spin from "react-spinkit"
import "react-spinkit/dist/index.css"

const App = () => {
  return (
    <div>
      <h3>Roating Plane</h3>
      <Spin type='roating-plane' size='sm' color='dark' />
      <Spin type='roating-plane' color='primary' />
      <Spin type='roating-plane' size='lg' color='warning' />
      <h3>Pulse</h3>
      <Spin type='pulse' size='sm' color='dark' />
      <Spin type='pulse' color='primary' />
      <Spin type='pulse' size='lg' color='warning' />
      <h3>Double Bounce</h3>
      <Spin type='double-bounce' size='sm' color='dark' />
      <Spin type='double-bounce' color='success' />
      <Spin type='double-bounce' size='lg' color='danger' />
    </div>
  )
}

export default App
