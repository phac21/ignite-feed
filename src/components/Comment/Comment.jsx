import styles from './Comment.module.css'
import { FaRegTrashAlt, FaThumbsUp } from "react-icons/fa";

export function Comment(){
    return(
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/45366019?v=4" alt="avatar" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Henrique</strong>
                            <time dateTime="">Cerca de 1h</time>

                        </div>
                        <button title='Deletar comentario'>
                            <FaRegTrashAlt size={24}/>
                        </button>
                    </header>
                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <FaThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}