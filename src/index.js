import React from "react"
import PropTypes from "prop-types"
import { RoatingPlane, Pulse, DoubleBounce } from "./components"

const Spin = ({ type, size, color, ...rest }) => {
  switch (type) {
    case "roating-plane":
      return <RoatingPlane size={size} color={color} {...rest} />
    case "pulse":
      return <Pulse size={size} color={color} {...rest} />
    case "double-bounce":
      return <DoubleBounce size={size} color={color} {...rest} />
    default:
      return <h1>NO SPIN</h1>
  }
}

Spin.defaultProps = {
  type: "roating-plane",
  size: "",
  color: ""
}

Spin.propType = {
  type: PropTypes.oneOf(["roating-plane", "pulse", "double-bounce"]),
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
