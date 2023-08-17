import React, { useState } from 'react';
import style from '../style/todolist.module.scss';

export function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <>
      <div className={style.todolist}>
        <div className={style.inputContainer}>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="What to do today?"
          />
          <button className={style.addbutton} onClick={addTask}>Add</button>
        </div>
        {tasks.length > 0 && (
          <button className={style.deleteAllButton} onClick={deleteAllTasks}>
            Delete All
          </button>
        )}
        <ul className={style.taskList}>
          {tasks.map((task, index) => (
            <li key={index} className={style.taskItem}>
              {task}
              <button className={style.deletebutton} onClick={() => deleteTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
