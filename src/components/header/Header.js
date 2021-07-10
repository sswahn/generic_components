import config from '../../config'
import styles from './header.module.css'

export default () => {

  const handleSearch = event => {

  }

  return (
    <header className={styles.header}>
      <h1>
        <a href={config.url.home} title="Home">
          {/* <img src="" alt="Logo" /> */}
          <span>ESL</span>
        </a>
      </h1>
      {/* <form>
        <input type="seach" placeholder="Seach" onChange={handleSearch} />
      </form> */}
      <nav>
        <a href="" title="Find a School">Schools</a>
        <a href="" title="Find a Teacher">Teachers</a>
      </nav>
    </header>
  )
}