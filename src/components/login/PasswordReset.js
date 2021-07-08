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
      username: event.target.elements[0].value
    }
    const response = await server.post(config.api.sign_up, request)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    window.location.href = '/confirm'
  }

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          <input type="text" placeholder="Username"  />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}