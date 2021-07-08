import { BrowserRouter, Switch, Route } from 'react-router-dom'
import config from './config'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import SignUp from './components/login/SignUp'
import PasswordReset from './components/login/PasswordReset'
import ConfirmPasswordReset from './components/login/ConfirmPasswordReset'

export default () => 
  <BrowserRouter>
    <Switch>
      <Route exact path={config.url.sign_in}>
        <Login />
      </Route>
      <Route exact path={config.url.sign_up}>
        <SignUp />
      </Route>
      <Route exact path={config.url.password_reset}>
        <PasswordReset />
      </Route>
      <Route exact path={config.url.confirm_password_reset}>
        <ConfirmPasswordReset />
      </Route>
    </Switch>
  </BrowserRouter>