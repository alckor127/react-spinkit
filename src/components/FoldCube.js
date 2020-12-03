import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const FoldCube = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-fold`]]: true,
    [styles[`spin-fold-${color}`]]: color,
    [styles[`spin-fold-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-fold-cube`]}></div>
      <div className={styles[`spin-fold-cube`]}></div>
      <div className={styles[`spin-fold-cube`]}></div>
      <div className={styles[`spin-fold-cube`]}></div>
    </div>
  )
}

export { FoldCube }
