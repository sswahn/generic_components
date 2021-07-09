import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import cookie from '../../utilities/Cookie'
import server from '../../utilities/Server'
import styles from './user.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    user: undefined, 
    activity: [] 
  })

  const getUser = () => {
    const token = cookie.get('token')
    const cognito = cookie.decode(token)
    return {
      username: cognito['cognito:username'],
      picture: cognito['picture'],
      bio: cognito['bio'] || '',
      social: cognito['social'] || []
    }
  }

  const loadData = async () => {
    const response = await server.get(config.api.user_activity)
    if (response.error !== undefined) {
      return dispatch({ type: 'alert', payload: config.errors.api_response })
    }
    const user = getUser()
    const activity = response.message
    setState({ user, activity })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <main className={styles.profile}>
      <section>
        <header>
          <img src={state.user.picture} alt={state.user.username} />
          <h2>{state.user.username}</h2>
          <div id="bio">
            <p>{state.user.bio}</p>
          </div>
          <div id="social-links">
            {state.user.social.map(item => 
              <a href={item.social_url}>{item.type}</a>
            )}
          </div>
        </header>
        <div id="activity">
          {state.activity.length && state.activity.map(item =>
            <article>
              <div>{item.name}</div>
              <div>{item.body}</div>
            </article>  
          )}
        </div>
      </section>
      <section id="sidebar">

      </section>
    </main>
  )
}