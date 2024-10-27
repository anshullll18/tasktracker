import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './components/TaskTracker.css';


const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        const newTask = { title, completed: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleComplete = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <h1>Task Tracker</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        </div>
    );
};

export default App;