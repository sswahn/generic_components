import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import './alert.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  
  const closeAlert = () => {
    dispatch({ type: 'alert' })
  }

  useEffect(() => {
    document.addEventListener('click', closeAlert)
    return () => {
      document.removeEventListener('click', closeAlert)
    }
  })

  return (
    <div className="alert" style={
      context.alert ? { display: 'block' } : { display: 'none' }
    }>{context.alert}</div>
  )
}