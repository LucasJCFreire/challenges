import { LuTrash } from "react-icons/lu";
import styles from "./Panel.module.scss";

export default function Panel({ tasks, openDeleteModal, toggleTaskStatus }) {
  return (
    <div className={styles.panel}>
      <p>Suas tarefas de hoje</p>
      <ul className={styles.pending}>
        {tasks.pending.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              id={`task-${task.id}`}
              title={`Clique para alterar o status da tarefa para completa`}
              aria-label={`Alterar status da tarefa ${task.title}`}
              checked={false}
              onChange={() => toggleTaskStatus(task.id, "pending")}
            />
            <label htmlFor={`task-${task.id}`}>{task.title}</label>
            <button
              className={styles.trashButton}
              title="Clique para deletar essa tarefa"
              aria-label={`Excluir a tarefa ${task.title}`}
              onClick={() => openDeleteModal(task, "pending")}
            >
              <LuTrash />
            </button>
          </li>
        ))}
      </ul>
      <p>Tarefas finalizadas</p>
      <ul className={styles.completed}>
        {tasks.completed.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              id={`task-${task.id}`}
              title={`Clique para alterar o status da tarefa para pendente`}
              aria-label={`Alterar status da tarefa ${task.title}`}
              checked={true}
              onChange={() => toggleTaskStatus(task.id, "completed")}
            />
            <label htmlFor={`task-${task.id}`}>{task.title}</label>
            <button
              className={styles.trashButton}
              title="Clique para deletar essa tarefa"
              aria-label={`Excluir a tarefa ${task.title}`}
              onClick={() => openDeleteModal(task, "completed")}
            >
              <LuTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
