import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import cookie from '../../utilities/Cookie'
import server from '../../utilities/Server'
import styles from './teacher.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    user: undefined, 
    experience: [] 
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

// profile / bio
// rating
// video demo lesson
// experience
// education
// written endorsements
// skills
// connections 

  return (
    <main className={styles.profile}>
      <section>
        <header>
          <img src={state.user.picture} alt={state.user.username} />
          <h2>{state.user.username}</h2>
          <div id="bio">
            <p>{state.user.bio}</p>
          </div>
        </header>
        <div id="activity">
          {state.experience.length && state.experience.map(item =>
            <article>
              <div>
                {item.img && <div>{item.img}</div>}
                <div>{item.school}</div>
              </div>
              <div>{item.title}</div>
              <div>{item.rating}</div>
              <div>{item.description}</div>
            </article>  
          )}
        </div>
      </section>
      <section id="sidebar">

      </section>
    </main>
  )
}