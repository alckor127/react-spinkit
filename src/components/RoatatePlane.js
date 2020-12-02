import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const RoatatePlane = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-rotate-plane`]]: true,
    [styles[`spin-rotate-plane-${color}`]]: color,
    [styles[`spin-rotate-plane-${size}`]]: size,
    [className]: className
  })

  return <div className={_className} {...rest}></div>
}

export { RoatatePlane }
