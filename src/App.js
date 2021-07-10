import Provider from './Provider'
import Modal from './components/modal/Modal'
import Router from './Router'
import Footer from './components/footer/Footer'
import "./styles.css"

// slideshow
// collapsable sidebar

export default () =>
  <Provider>
    <Modal />
    <Router />
    <Footer />
  </Provider>