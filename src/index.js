import React from "react"
import PropTypes from "prop-types"
import {
  RoatatePlane,
  Pulse,
  DoubleBounce,
  Wave,
  WanderCube,
  Grow,
  Swing,
  Flow,
  Circle,
  GridCube,
  FadeCircle,
  FoldCube
} from "./components"

const Spin = ({ type, size, color, ...rest }) => {
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
    case "flow":
      return <Flow size={size} color={color} {...rest} />
    case "circle":
      return <Circle size={size} color={color} {...rest} />
    case "grid-cube":
      return <GridCube size={size} color={color} {...rest} />
    case "fade-circle":
      return <FadeCircle size={size} color={color} {...rest} />
    case "fold-cube":
      return <FoldCube size={size} color={color} {...rest} />
    default:
      return
  }
}

Spin.defaultProps = {
  type: "circle",
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
    "swing",
    "flow",
    "circle",
    "grid-cube",
    "fade-circle",
    "fold-cube"
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
