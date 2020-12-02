import React from "react"
import PropTypes from "prop-types"
import {
  RoatatePlane,
  Pulse,
  DoubleBounce,
  Wave,
  WanderCube,
  Grow,
  Swing
} from "./components"

const Spin = ({ type, size, color, ...rest }) => {
  console.log("TYPE", type)

  switch (type) {
    case "rotate-plane":
      return <RoatatePlane size={size} color={color} {...rest} />
    case "pulse":
      return <Pulse size={size} color={color} {...rest} />
    case "double-bounce":
      return <DoubleBounce size={size} color={color} {...rest} />
    case "wave":
      return <Wave size={size} color={color} {...rest} />
    case "wander-cube":
      return <WanderCube size={size} color={color} {...rest} />
    case "grow":
      return <Grow size={size} color={color} {...rest} />
    case "swing":
      return <Swing size={size} color={color} {...rest} />

    default:
      return <h4>NO SPIN</h4>
  }
}

Spin.defaultProps = {
  type: "rotate-plane",
  size: "",
  color: ""
}

Spin.propType = {
  type: PropTypes.oneOf([
    "rotate-plane",
    "pulse",
    "double-bounce",
    "wave",
    "wander-cube",
    "grow",
    "swing"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ])
}

export default Spin
