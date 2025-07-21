import React from 'react'
import styles from "./foter.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lama Dev</div>
      <div className={styles.text}>Al rights reserved</div>
    </div>
  )
}

export default Footer