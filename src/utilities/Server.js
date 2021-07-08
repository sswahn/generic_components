
const Server = () => {
  const post = async (api, request) => {
    const response = await fetch(api, {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  }

  return { post }
}

export default Server()