import React from "react"
import PropTypes from "prop-types"
import {
  Circle,
  DoubleBounce,
  FadeCircle,
  Flow,
  FoldCube,
  GridCube,
  Grow,
  Pulse,
  RoatatePlane,
  Swing,
  Wave
} from "./components"

const SpinKit = ({ type, size, color, ...rest }) => {
  switch (type) {
    case "circle":
      return <Circle size={size} color={color} {...rest} />
    case "double-bounce":
      return <DoubleBounce size={size} color={color} {...rest} />
    case "fade-circle":
      return <FadeCircle size={size} color={color} {...rest} />
    case "flow":
      return <Flow size={size} color={color} {...rest} />
    case "fold-cube":
      return <FoldCube size={size} color={color} {...rest} />
    case "grid-cube":
      return <GridCube size={size} color={color} {...rest} />
    case "grow":
      return <Grow size={size} color={color} {...rest} />
    case "pulse":
      return <Pulse size={size} color={color} {...rest} />
    case "rotate-plane":
      return <RoatatePlane size={size} color={color} {...rest} />
    case "swing":
      return <Swing size={size} color={color} {...rest} />
    case "wave":
      return <Wave size={size} color={color} {...rest} />
  }
}

SpinKit.defaultProps = {
  type: "fade-circle",
  size: "",
  color: ""
}

SpinKit.propType = {
  type: PropTypes.oneOf([
    "circle",
    "double-bounce",
    "fade-circle",
    "flow",
    "fold-cube",
    "grid-cube",
    "grow",
    "pulse",
    "rotate-plane",
    "swing",
    "wave"
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

export default SpinKit
