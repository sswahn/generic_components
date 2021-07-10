import config from '../../config'
import styles from './login.module.css'

export default () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <button className="btn-outline">Sign up as a Teacher</button>
        <div>or</div>
        <button className="btn-outline">Sign up as a School</button>
      </div>
    </div>
  )
}