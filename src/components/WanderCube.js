import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const WanderCube = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-wander`]]: true,
    [styles[`spin-wander-${color}`]]: color,
    [styles[`spin-wander-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-wander-cube`]}></div>
      <div className={styles[`spin-wander-cube`]}></div>
    </div>
  )
}

export { WanderCube }
