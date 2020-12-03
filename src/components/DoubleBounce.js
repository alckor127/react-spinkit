import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const DoubleBounce = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-double-bounce`]]: true,
    [styles[`spin-double-bounce-${color}`]]: color,
    [styles[`spin-double-bounce-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-double-bounce-dot`]} />
      <div className={styles[`spin-double-bounce-dot`]} />
    </div>
  )
}

export { DoubleBounce }
