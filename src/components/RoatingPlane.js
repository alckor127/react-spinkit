import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const RoatingPlane = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-rotateplane`]]: true,
    [styles[`spin-rotateplane-${color}`]]: color,
    [styles[`spin-rotateplane-${size}`]]: size,
    [className]: className
  })

  console.log("rest", rest)

  return <div className={_className} {...rest}></div>
}

export { RoatingPlane }
