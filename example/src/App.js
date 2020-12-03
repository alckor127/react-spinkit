import React from "react"
import Spin from "react-spinkit"
import "react-spinkit/dist/index.css"

const App = () => {
  return (
    <div style={{ margin: "20%" }}>
      <h3>Roating Plane</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='rotate-plane' size='sm' color='dark' />
        <Spin type='rotate-plane' color='primary' />
        <Spin type='rotate-plane' size='lg' color='warning' />
      </div>
      <hr />
      <h3>Pulse</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='pulse' size='sm' color='dark' />
        <Spin type='pulse' color='primary' />
        <Spin type='pulse' size='lg' color='warning' />
      </div>
      <hr />
      <h3>Double Bounce</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='double-bounce' size='sm' color='dark' />
        <Spin type='double-bounce' color='success' />
        <Spin type='double-bounce' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Wave</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='wave' size='sm' color='dark' />
        <Spin type='wave' color='success' />
        <Spin type='wave' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Grow</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='grow' size='sm' color='dark' />
        <Spin type='grow' color='success' />
        <Spin type='grow' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Chasing dots</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='swing' size='sm' color='dark' />
        <Spin type='swing' color='success' />
        <Spin type='swing' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Three Bounce</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='flow' size='sm' color='dark' />
        <Spin type='flow' color='success' />
        <Spin type='flow' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Circle</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='circle' size='sm' color='dark' />
        <Spin type='circle' color='success' />
        <Spin type='circle' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Grid Cube</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='grid-cube' size='sm' color='dark' />
        <Spin type='grid-cube' color='success' />
        <Spin type='grid-cube' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Fade Circle</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='fade-circle' size='sm' color='dark' />
        <Spin type='fade-circle' color='success' />
        <Spin type='fade-circle' size='lg' color='danger' />
      </div>
      <hr />
      <h3>Folding Cube</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Spin type='fold-cube' size='sm' color='dark' />
        <Spin type='fold-cube' color='success' />
        <Spin type='fold-cube' size='lg' color='danger' />
      </div>
    </div>
  )
}

export default App
