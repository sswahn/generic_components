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
    dispatch({ type: 'alert', payload: 'Success! Please confirm your email before logging in.' })
    await new Promise(resolve => setTimeout(resolve, 1500))
    window.location.href = config.url.sign_in
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Username"  />
          <input type="email" placeholder="Email"  />
          <input type="password" placeholder="Password"  />
          <input type="password" placeholder="Confirm Password"  />
          {/* recaptcha */}
          <small>By signing up, you agree to our <a href="">Terms</a>, <a href="">Privacy Policy</a>, and <a href="">Cookie Use</a>.</small>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}