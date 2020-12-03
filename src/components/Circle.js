import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const Circle = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-circle`]]: true,
    [styles[`spin-circle-${color}`]]: color,
    [styles[`spin-circle-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
      <div className={styles[`spin-circle-dot`]}></div>
    </div>
  )
}

export { Circle }
