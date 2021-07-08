import { useContext } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import server from '../../utilities/Server'
import styles from './login.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const handleSubmit = async event => {
    event.preventDefault()
    const request = {
      username: event.target.elements[0].value
    }
    const response = await server.post(config.api.password_reset, request)
    if (response.error !== undefined) {
      return dispatch({ type: 'alert', payload: config.errors.api_response })
    }
    window.location.href = config.url.confirm_password_reset
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          <input type="text" placeholder="Username"  />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}