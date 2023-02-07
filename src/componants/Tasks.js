import Task from "./Task";

const Tasks = ({ tasks, onDel, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDel={onDel} onToggle={onToggle}>
          {" "}
        </Task>
      ))}
    </>
  );
};

export default Tasks;
