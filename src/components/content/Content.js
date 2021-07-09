import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import Article from './Article'
import config from '../../config'
import server from '../../utilities/Server'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ data: [] })
  
  const loadData = async () => {
    const response = await server.get(config.api.media)
    if (response.error !== undefined) {
      dispatch({ type: 'alert', payload: config.errors.api_response })
    }
    setState({ data: response.message })
  }

  useEffect(() => {
    loadData()
  }, [])

  return  (
    <main>
      {state.data.length && state.data.map(item => <Article data={item} />)}
    </main>
  )
}