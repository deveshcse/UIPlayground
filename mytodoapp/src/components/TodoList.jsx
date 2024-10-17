import { useState } from "react"
import TodoItem from "./TodoItem";
const TodoList = () => {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([ {
        id: 1,
        text: 'Doctor Appointment',
        completed: true,
        isEditing: false,
        },
        {
        id: 2,
        text: 'Meeting at School',
        completed: false,
        isEditing: false,
        }]);

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }


    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                return {...task, completed: !task.completed};
            }else{
                return task;
            }
        }));
    }

    const toggleEditTask = (id) => {
            setTasks(tasks.map((task) =>{
                if (task.id === id){
                    return {...task, isEditing: !task.isEditing};
                }else{
                    return task;
                }
            }));
    }

    function updateTask(id, newText) {
        setTasks(tasks.map(task => {
            if(task.id === id){
                return {...task, text:newText, isEditing: false};
            }else{
                return task;
            }
        }));
    }
  return (
    <div className="bg-white w-6/12 mt-16">
        <div className="flex justify-around"><input
        className="border-2 bg-gray-500"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter your task"
        ></input>
        <button onClick={() => addTask(text)} className="border-2 border-black">Add to list</button>
        </div>
        {tasks.map(task => (
            <TodoItem
            key={task.id}
            task= {task}
            deleteTask = {deleteTask}
            toggleCompleted = {toggleCompleted}
            setText= {setText}
            addTask = {addTask}
            toggleEditTask={toggleEditTask}
            updateTask = {updateTask}
            />
        ))}
        
    </div>
  );
}

export default TodoList;