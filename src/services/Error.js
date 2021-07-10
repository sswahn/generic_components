import config from "../config"
import server from '../Server'

const ErrorService = () => {

  const log = async (error, info = {}) => {
    const request = {
      error,
      info
    }
    const response = await server.post('/errors', request)
    if (response.error !== undefined) {
      console.error(response.error.message)
    }
    return config.errors.api_response
  }

  return { log }
}

export default ErrorService()