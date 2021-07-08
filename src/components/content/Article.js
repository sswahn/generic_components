import styles from './article.module.css'

export default ({ 
  avatar_src,
  username,
  date_time,
  parsed_date,
  body,
  img_src,
  img_alt,
  video_src,
  video_id
 }) => {

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div>
          <img src={avatar_src} alt={username} />
          <div>
            <h2>{username}my name</h2>
            <time datetime={date_time}>{parsed_date}time</time>
          </div>
        </div>
        <div>
          <button>
            <span>&#8943;</span>
          </button>
        </div>
      </header>
      <div className={styles.main}>
        <p>{body}Hello.</p>
        {img_src && <img src={img_src} alt={img_alt} />}
        {video_src && <video controls="controls" src={video_src} dataYoutubeId={video_id} ></video>}
      </div>
      <footer className={styles.footer}>
        <button>Comment</button>
        <button>Share</button>
      </footer>
    </article>
  )
}