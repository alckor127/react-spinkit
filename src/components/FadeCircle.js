import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const FadeCircle = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-fade-circle`]]: true,
    [styles[`spin-fade-circle-${color}`]]: color,
    [styles[`spin-fade-circle-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
      <div className={styles[`spin-fade-circle-dot`]} />
    </div>
  )
}

export { FadeCircle }
