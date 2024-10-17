import { useState } from "react";

const TodoItem = ({
  task: { id, text, completed, isEditing },
  deleteTask,
  toggleCompleted,
  toggleEditTask,
  updateTask,
}) => {
  const [editText, setEditText] = useState(text);

  const handleUpdate = () => {
    updateTask(id, editText);
  };

  return (
    <div className="flex gap-5 m-4 justify-items-start">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border-2 border-black"
          />
          <button className="bg-green-600" onClick={handleUpdate}>
            Save
          </button>
        </>
      ) : (
        <p className={completed ? "line-through" : ""}>{text}</p>
      )}
      <button
        className="bg-gray-400 border-2 border-black"
        onClick={() => toggleEditTask(id)}
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>{" "}
      <button className="border-2 bg-gray-400" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
