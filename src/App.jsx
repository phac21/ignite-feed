import { Post } from "./Post";
import { Header } from "./components/Header/Header";
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar";
export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Pedroca" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia incidunt labore nobis asperiores fugit nemo accusamus ipsam? Nostrum id molestias atque aut. Inventore veniam perspiciatis ea eveniet autem vero." />
          <Post author="Joao" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia incidunt labore nobis asperiores fugit nemo accusamus ipsam? Nostrum id molestias atque aut. Inventore veniam perspiciatis ea eveniet autem vero." />
        </main>
      </div>
    </>
  );
}

