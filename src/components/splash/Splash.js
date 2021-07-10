import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './splash.module.css'

export default () =>{
  const [context, dispatch] = useContext(Context)

  return (
    <div className={styles.splash}>
      <div>
        <section>
          <div>
            <button>Sign in as a Teacher</button>
            <button>Sign in as a School</button>
          {/* opens a login modal, has register as ... link  */}
          </div>
        </section>
        <section>
          <div>
            {/* app description  */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      </div>
    </div>
  )
}