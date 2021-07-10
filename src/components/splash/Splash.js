import { useContext } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import styles from './splash.module.css'

export default () =>{
  const [context, dispatch] = useContext(Context)

  const openModal = event => {
    dispatch({ type: 'modal', payload: event.target.id })
  }

  const openSignUp = () => {
    window.location.href = config.url.sign_up
  }

  return (
    <div className={styles.splash}>
      <div>
        <section>
          <div>
            <button className="btn-outline" id="teacher-login" onClick={openModal}>Sign In</button>
            <button className="btn-outline" id="school-login" onClick={openSignUp}>Sign Up</button>
          </div>
        </section>
        <section>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      </div>
    </div>
  )
}