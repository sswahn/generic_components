import { BrowserRouter, Switch, Route } from 'react-router-dom'
import config from './config'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Splash from './components/splash/Splash'
import Login from './components/login/Login'
import SignUp from './components/login/SignUp'
import SignUpAsTeacher from './components/login/SignUpAsTeacher'
import SignUpAsSchool from './components/login/SignUpAsSchool'
import PasswordReset from './components/login/PasswordReset'
import ConfirmPasswordReset from './components/login/ConfirmPasswordReset'
import TeacherProfile from './components/teacher/TeacherProfile'

export default () => 
  <BrowserRouter>
    <Switch>
      <Route exact path={config.url.splash}>
        <Splash />
      </Route>
      <Route exact path={config.url.sign_up}>
        <SignUp />
      </Route>
      <Route exact path={config.url.sign_up_as_teacher}>
        <SignUpAsTeacher />
      </Route>
      <Route exact path={config.url.sign_up_as_school}>
        <SignUpAsSchool />
      </Route>

      <Route exact path={config.url.sign_in}>
        <Login />
      </Route>
      <Route exact path={config.url.password_reset}>
        <PasswordReset />
      </Route>
      <Route exact path={config.url.confirm_password_reset}>
        <ConfirmPasswordReset />
      </Route>


      <Route exact path={config.url.teacher_profile}>
        <TeacherProfile />
      </Route>
    </Switch>
  </BrowserRouter>