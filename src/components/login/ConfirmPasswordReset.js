import config from '../../config'
import server from '../../utilities/Server'
import './login.css'

export default () => {
  const handleSubmit = async event => {
    event.preventDefault()
    if (event.target.elements[2].value !== event.target.elements[3].value) {
      return alert('Passwords do not match.')
    }
    const request = {
      username: event.target.elements[0].value,
      email: event.target.elements[1].value,
      password: event.target.elements[2].value
    }
    const response = await server.post(config.api.sign_up, request)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    alert('Success! Check your email confirmation before logging in.')
    window.location.href = config.url.sign_in
  }

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
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