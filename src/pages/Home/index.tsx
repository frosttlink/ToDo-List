import logo from "../../assets/logo.svg";
import clipboardText from "../../assets/clipboardText.svg";

import {
  NewTaskInput,
  NewTaskButton,
  HomeHeader,
  AreaRegisterTask,
  HomeContent,
  TaskList,
  TaskStatus,
  CounterTask,
  Created,
  Done,
  Stats,
  NoneTasksExisting,
} from "./styles";
import { TaskCard } from "./components/TaskCard";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function addTask() {
    if (!newTaskText.trim()) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), content: newTaskText, isCompleted: false },
    ]);

    setNewTaskText("");
  }

  function removeTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function taskIsComplete(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  const completedCount = tasks.reduce(
    (count, task) => count + (task.isCompleted ? 1 : 0),
    0,
  );

  return (
    <div>
      <HomeHeader>
        <img src={logo} alt="" />
      </HomeHeader>

      <HomeContent>
        <AreaRegisterTask>
          <NewTaskInput
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <NewTaskButton onClick={addTask}>
            Criar
            <PlusCircle size={16} />
          </NewTaskButton>
        </AreaRegisterTask>

        <TaskStatus>
          <Stats>
            <Created>Tarefas criadas</Created>
            <CounterTask>
              <p>{tasks.length}</p>
            </CounterTask>
          </Stats>
          <Stats>
            <Done>Concluídas</Done>{" "}
            <CounterTask>
              <p>
                {completedCount} de {tasks.length}
              </p>
            </CounterTask>
          </Stats>
        </TaskStatus>

        <div>
          {tasks.length === 0 ? (
            <NoneTasksExisting>
              <img src={clipboardText} alt="" />
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </NoneTasksExisting>
          ) : (
            <TaskList>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={removeTask}
                  onToggle={taskIsComplete}
                />
              ))}
            </TaskList>
          )}
        </div>
      </HomeContent>
    </div>
  );
}
