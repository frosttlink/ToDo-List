import { CustomTrash, Task, TaskCheck } from "./styles";

interface TaskProps {
  task: { id: number; content: string; isCompleted: boolean };
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export function TaskCard({ task, onDelete, onToggle }: TaskProps) {
  return (
    <Task style={{ borderColor: task.isCompleted ? "#262626" : "#333333", color: task.isCompleted ? "#808080" : "#F2F2F2"}}>
      <TaskCheck
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
      />
      <p style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}>
        {task.content}
      </p>
      <CustomTrash onClick={() => onDelete(task.id)} size={17} />
    </Task>
  );
}
