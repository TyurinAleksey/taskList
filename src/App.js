import "./styles/app.scss"
import TaskItem from "./components/taskItem";
import {useState} from "react";
import ModalWindow from "./components/modalWindow";
import TaskForm from "./components/TaskForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Задача вторая", time: "17.03.2024", prioriti: "high", tags: "development"},
        {id: 2, title: "Задача первая", time: "16.03.2024", prioriti: "normal", tags: "research, development"},
    ])

    const [modalActive, setModalActive] = useState(false)

    const createTask = (newTask) => {
        setPosts([newTask, ...posts])
    }
  return (
    <div className="App">
      <div className="sidebar">
          <div className="sidebar__sorted">
              <form>
                  <h3>СОРТИРОВКА</h3>
                  <input type="radio" name="sorted"/>
                  <label htmlFor="">Новые</label>

                  <input type="radio" name="sorted"/>
                  <label htmlFor="">Старые</label>
              </form>
          </div>
          <div className="sidebar__sorted">
              <form>
                  <h3>ПРИОРИТЕТ</h3>
                  <input type="checkbox"/>
                  <label htmlFor="">low</label>

                  <input type="checkbox"/>
                  <label htmlFor="">normal</label>

                  <input type="checkbox"/>
                  <label htmlFor="">high</label>
              </form>
          </div>
          <div className="sidebar__sorted">
              <form>
                  <h3>ОТМЕТКА</h3>
                  <input type="checkbox"/>
                  <label htmlFor="">research</label>

                  <input type="checkbox"/>
                  <label htmlFor="">design</label>

                  <input type="checkbox"/>
                  <label htmlFor="">development</label>
              </form>
          </div>
      </div>
        <div className="main">
            <ModalWindow
                active={modalActive}
                setActive={setModalActive}
            >
                <TaskForm create={createTask}/>
            </ModalWindow>
            <button className="main__addTask"
                    onClick={() => setModalActive(true)}
            >
                Создать задачу
            </button>
            {posts.map(post =>
                <TaskItem post={post} key={post.id}/>
            )}
        </div>
    </div>
  );
}

export default App;
