import { BrowserRouter, Switch, Route } from 'react-router-dom'
import config from './config'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import SignUp from './components/login/SignUp'

export default () => 
  <BrowserRouter>
    <Switch>
      <Route exact path={config.url.sign_in}>
        <Login />
        <Footer />
      </Route>
      <Route exact path={config.url.sign_up}>
        <SignUp />
        <Footer />
      </Route>
    </Switch>
  </BrowserRouter>