import styles from "./style.module.sass"

export const DarkLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <h3>Dark Layout</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
