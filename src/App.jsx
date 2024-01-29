import { Post } from "./Post";
import { Header } from "./components/Header/Header";
import './global.css'
export function App() {
  return (
    <>
      <Header/>
      <Post author="Pedroca" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia incidunt labore nobis asperiores fugit nemo accusamus ipsam? Nostrum id molestias atque aut. Inventore veniam perspiciatis ea eveniet autem vero." />
      <Post author="Joao" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia incidunt labore nobis asperiores fugit nemo accusamus ipsam? Nostrum id molestias atque aut. Inventore veniam perspiciatis ea eveniet autem vero." />
    </>
  );
}

