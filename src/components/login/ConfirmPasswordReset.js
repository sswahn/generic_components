import { useContext } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import server from '../../utilities/Server'
import styles from './login.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const handleSubmit = async event => {
    event.preventDefault()
    if (event.target.elements[2].value !== event.target.elements[3].value) {
      return dispatch({ type: 'alert', payload: 'Passwords do not match.' })
    }
    const request = {
      username: event.target.elements[0].value,
      email: event.target.elements[1].value,
      password: event.target.elements[2].value
    }
    const response = await server.post(config.api.sign_up, request)
    if (response.error !== undefined) {
      return dispatch({ type: 'alert', payload: config.errors.api_response })
    }
    dispatch({ type: 'alert', payload: 'Success! Check your email confirmation before logging in.' })
    window.location.href = config.url.sign_in
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Create New Password</h2>
          <span>Check your email for confirmation code.</span>
          <input type="text" placeholder="Code"  />
          <input type="text" placeholder="Username"  />
          <input type="password" placeholder="New Password"  />
          <input type="password" placeholder="Confirm New Password"  />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}