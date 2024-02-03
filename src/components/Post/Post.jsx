import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/45366019?v=4" alt="avatar" />
          <div className={styles.authorInfo}>
            <strong>Pedroca</strong>
            <p>Software Enginieer</p>
          </div>
        </div>
        <time dateTime="">Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p> 

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 

        <p><a href="">jane.design/doctorcare</a></p> 

        <p> 
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat </a>
          </p>
      </div>

        <form className={styles.form}>
          <strong>Deixe seu Feedback</strong>
          <textarea placeholder="Deixe um comentario"></textarea>
          <footer>
            <button type="submit">Comentar</button>
          </footer>
        </form>


    </article>
   
  );
}
