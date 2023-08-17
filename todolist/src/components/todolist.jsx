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
          <button onClick={addTask}>Add</button>
        </div>
        <ul className={style.taskList}>
          {tasks.map((task, index) => (
            <li key={index} className={style.taskItem}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
