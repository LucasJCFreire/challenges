"use client";
import { useState } from "react";
import Panel from "../components/panel/Panel.js";
import Button from "../components/button/Button.js";
import Modal from "../components/modal/Modal.js";

const defaultTasks = {
  pending: [
    { id: 1, title: "Lavar as mãos", isChecked: false },
    { id: 2, title: "Fazer um bolo", isChecked: false },
    { id: 3, title: "Lavar a louça", isChecked: false },
  ],
  completed: [{ id: 4, title: "Levar o lixo para fora", isChecked: true }],
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [tasks, setTasks] = useState(defaultTasks);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (type, task = null) => {
    setModalType(type);
    setSelectedTask(task);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTask(null);
  };

  const addTask = (title) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      pending: [...prevTasks.pending, { id: Date.now(), title }],
    }));
  };

  const deleteTask = (taskId, status) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: prevTasks[status].filter((task) => task.id !== taskId),
    }));
  };

  const toggleTaskStatus = (taskId, currentStatus) => {
    const task = tasks[currentStatus].find((task) => task.id === taskId);
    if (task) {
      const newStatus = currentStatus === "pending" ? "completed" : "pending";
      setTasks((prevTasks) => ({
        ...prevTasks,
        [currentStatus]: prevTasks[currentStatus].filter(
          (t) => t.id !== taskId
        ),
        [newStatus]: [
          ...prevTasks[newStatus],
          { ...task, isChecked: !task.isChecked },
        ],
      }));
    }
  };

  return (
    <>
      <Panel
        tasks={tasks}
        openDeleteModal={(task, status) =>
          openModal("delete", { ...task, status })
        }
        toggleTaskStatus={toggleTaskStatus}
      />
      <Button
        btnType="add"
        text="Adicionar nova tarefa"
        onClick={() => openModal("add")}
        title="Clique para adicionar uma nova tarefa"
        aria-label="Clique para adicionar uma nova tarefa"
      />
      {isOpen && (
        <Modal
          type={modalType}
          title={modalType === "add" ? "Nova Tarefa" : "Deletar Tarefa"}
          text={
            modalType === "add"
              ? "Título"
              : "Tem certeza que você deseja deletar essa tarefa?"
          }
          closeModal={closeModal}
          onConfirm={
            modalType === "add"
              ? addTask
              : () => deleteTask(selectedTask.id, selectedTask.status)
          }
        />
      )}
    </>
  );
}
