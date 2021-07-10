import { useContext } from 'react'
import { Context } from '../../Provider'
import Login from '../login/Login'
import styles from './modal.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const close = () => {
    dispatch({ type: 'modal' })
  }
 
  const renderContent = () => {
    console.log('modal: ', context.modal)
    switch (context.modal) {
      case 'teacher-login':
        return <Login />
      default:
        return
    }
  }
 
  return (
    <div id="modal" className={styles.modal} style={{
      display: context.modal ? 'block' : 'none'
    }}>
      <div>
        <button className={styles.button} onClick={close}>
          <span>X</span>
        </button>
      </div>
      <div id="content" className={styles.content}>
        {renderContent()}
      </div>
    </div>
  )
}