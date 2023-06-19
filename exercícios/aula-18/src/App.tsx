import { useSelector } from "react-redux";
import { RegisterTaskCard } from "./components/RegisterTaskCard";

// import { useQuery } from "@tanstack/react-query";
// import { getTodos } from "../../../requests/Mesa02/todos";
import { TaskCard } from "./components/TaskCard";
import styles from "./style.module.scss";
import { RootState } from "./redux/store";

function App() {
  // const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  // const { data, isFetching, error } = useQuery(["@getTodos"], getTodos, {
  //   refetchOnWindowFocus: false,
  // });

  // if (isFetching) {
  //   return <h3>Carregando...</h3>;
  // }

  // if (error) {
  //   return <h3>Erro ao buscar dados</h3>;
  // }

  return (
    <div className={styles["mesa-02"]}>
      <aside>
        <RegisterTaskCard />
      </aside>
      <main>
        <div className={styles["title-container"]}>
          <h2 className={styles["page-title"]}>Minhas Tarefas</h2>
          <p className={styles["tasks-total"]}>
            {/* Total: {data?.data?.length} tarefas */}
          </p>
        </div>
        <ul className={styles["tasks-list"]}>
          {tasks.map((task, index) => (
            <li key={index}>
              <TaskCard
                title={task.title}
                date={task.date}
                category={task.category}
                description={task.description}
                index={index}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;