import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const Grow = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-grow`]]: true,
    [styles[`spin-grow-${color}`]]: color,
    [styles[`spin-grow-${size}`]]: size,
    [className]: className
  })

  return <div className={_className} {...rest} />
}

export { Grow }
