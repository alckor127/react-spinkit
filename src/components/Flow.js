import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const Flow = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-flow`]]: true,
    [styles[`spin-flow-${color}`]]: color,
    [styles[`spin-flow-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-flow-dot`]} />
      <div className={styles[`spin-flow-dot`]} />
      <div className={styles[`spin-flow-dot`]} />
    </div>
  )
}

export { Flow }
