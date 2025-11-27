import axios from "../api/axios";

export default function TaskList({ tasks, fetchTasks }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Failed to delete task");
      }
      console.error(err);
    }
  };

  const toggleStatus = async (task) => {
    try {
      await axios.put(`/tasks/${task._id}`, {
        ...task,
        status: task.status === "completed" ? "pending" : "completed",
      });
      fetchTasks();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Failed to update task");
      }
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.description} - {task.status}{" "}
            <button onClick={() => toggleStatus(task)}>
              {task.status === "completed" ? "Mark Pending" : "Mark Completed"}
            </button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
