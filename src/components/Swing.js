import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const Swing = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-swing`]]: true,
    [styles[`spin-swing-${color}`]]: color,
    [styles[`spin-swing-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-swing-dot`]} />
      <div className={styles[`spin-swing-dot`]} />
    </div>
  )
}

export { Swing }
