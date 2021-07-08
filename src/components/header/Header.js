import config from '../../config'
import styles from './header.module.css'

export default () => {

  const handleSearch = event => {

  }

  return (
    <header className={styles.header}>
      <h1>
        <a href={config.url.home} title="Home">
          <img src="" alt="Logo" />
        </a>
      </h1>
      <form>
        <input type="seach" onChange={handleSearch} />
      </form>
      <nav>

      </nav>
    </header>
  )
}