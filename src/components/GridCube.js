import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const GridCube = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-grid`]]: true,
    [styles[`spin-grid-${color}`]]: color,
    [styles[`spin-grid-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
      <div className={styles[`spin-grid-cube`]} />
    </div>
  )
}

export { GridCube }
