import Provider from './Provider'
import Alert from './components/alert/Alert'
import Router from './Router'
import Footer from './components/footer/Footer'
import "./styles.css"

// make header,
// modal
// slideshow
// collapsable side bar (youtubeish)

export default () =>
  <Provider>
    <Alert />
    <Router />
    <Footer />
  </Provider>