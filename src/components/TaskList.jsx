import React from "react";
import "./TaskTracker.css";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li
                    className={`task ${task.completed ? 'completed' : ''}`}
                >
                    <span>
                        {task.title}
                    </span>
                    <div>
                        <button onClick={() => toggleComplete(index)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

