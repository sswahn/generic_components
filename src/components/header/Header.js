import config from '../../config'
import './header.css'

export default () => {

  const handleSearch = event => {

  }

  return (
    <header className="header">
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