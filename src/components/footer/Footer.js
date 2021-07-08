import styles from './footer.module.css'

export default () => 
  <footer className={styles.footer}>
    <span>&copy; {new Date().getFullYear()}</span>
  </footer>