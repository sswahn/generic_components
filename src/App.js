import Provider from './Provider'
import Alert from './components/alert/Alert'
import Router from './Router'
import "./styles.css";

export default () =>
  <Provider>
    <Alert />
    <Router />
  </Provider>