import styles from './article.module.css'

export default () => {

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <img src="" alt="" />
        <h2>Username</h2>
        <time datetime="">1 hour ago</time>
        {/* dropdown menu */}
      </header>
      <div className={styles.main}>
        <p>main content text.</p>
        <img src="" alt="" />
        <video controls="controls" xWebkitAirplay="allow" dataYoutubeId="N9oxmRT2YWw" src=""></video>
      </div>
      <footer className={styles.footer}>
        <button>Comment</button>
        <button>Share</button>
      </footer>
    </article>
  )
}