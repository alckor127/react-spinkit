import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const Pulse = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-pulse`]]: true,
    [styles[`spin-pulse-${color}`]]: color,
    [styles[`spin-pulse-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-pulse-dot`]} />
      <div className={styles[`spin-pulse-dot`]} />
      <div className={styles[`spin-pulse-dot`]} />
      <div className={styles[`spin-pulse-dot`]} />
      <div className={styles[`spin-pulse-dot`]} />
      <div className={styles[`spin-pulse-dot`]} />
    </div>
  )
}

export { Pulse }
