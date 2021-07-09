import config from "../config"


const Error = () => {
  const log = async message => {
    const request = {
      type: 'api',
      message: message
    }
    const reponse = await server.post('/error', request)
    return config.errors.api_response
  }

  return { log }
}

export default Error()