// function Home(){
//     return (
//         <div>
//             <h1>Welcome to our website!</h1>
//             <p>This is the home page.</p>
//         </div>
//     )
// }
// export default Home;

"use client";

import { useState } from "react";

// enum
enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

// interface
interface Task {
  title: string;
  id: number;
  isCompleted: boolean;
  priority: Priority;
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [priority, setPriority] =
    useState<Priority>(Priority.Low);

  // editing states
  const [editId, setEditId] =
    useState<number | null>(null);

  const [editTitle, setEditTitle] =
    useState("");

  const [editPriority, setEditPriority] =
    useState<Priority>(Priority.Low);

  // add
  const addTask = (): void => {
    const task: Task = {
      id,
      title,
      isCompleted: false,
      priority,
    };

    const existingTask = tasks.find(
      (t) =>
        t.id === task.id ||
        t.title === task.title
    );

    if (existingTask) {
      alert("Task already exists");
      return;
    }

    setTasks([...tasks, task]);

    setId(0);
    setTitle("");
    setPriority(Priority.Low);
  };

  // search
  const searchTaskById = (
    id: number
  ): Task | undefined => {
    return tasks.find(
      (task) => task.id === id
    );
  };

  // delete
  const deleteTask = (
    id: number
  ): void => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  // toggle
  const toggleTask = (
    id: number
  ): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted:
                !task.isCompleted,
            }
          : task
      )
    );
  };

  // start edit
  const startEdit = (
    task: Task
  ): void => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditPriority(task.priority);
  };

  // save edit
  const saveEdit = (): void => {
    setTasks(
      tasks.map((task) =>
        task.id === editId
          ? {
              ...task,
              title: editTitle,
              priority: editPriority,
            }
          : task
      )
    );

    setEditId(null);
  };

  return (
    <div>
      <h1>To Do List</h1>

      {/* add task */}
      <input
        type="number"
        placeholder="Enter id"
        value={id}
        onChange={(e) =>
          setId(Number(e.target.value))
        }
      />

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(
            e.target.value as Priority
          )
        }
      >
        <option value="low">
          Low
        </option>
        <option value="medium">
          Medium
        </option>
        <option value="high">
          High
        </option>
      </select>

      <button onClick={addTask}>
        Add
      </button>

      <br />
      <br />

      {/* search */}
      <input
        type="number"
        placeholder="Search by id"
        onChange={(e) => {
          const id = Number(
            e.target.value
          );

          const task =
            searchTaskById(id);

          if (task) {
            alert(
              `${task.id}
${task.title}
${task.priority}
${task.isCompleted}`
            );
          } else {
            alert("Task not found");
          }
        }}
      />

      {/* tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) =>
                    setEditTitle(
                      e.target.value
                    )
                  }
                />

                <select
                  value={
                    editPriority
                  }
                  onChange={(e) =>
                    setEditPriority(
                      e.target
                        .value as Priority
                    )
                  }
                >
                  <option value="low">
                    Low
                  </option>
                  <option value="medium">
                    Medium
                  </option>
                  <option value="high">
                    High
                  </option>
                </select>

                <button
                  onClick={saveEdit}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {task.id} -
                {task.title} -
                {task.priority} -
                {task.isCompleted
                  ? "Completed"
                  : "Pending"}

                <button
                  onClick={() =>
                    toggleTask(
                      task.id
                    )
                  }
                >
                  Toggle
                </button>

                <button
                  onClick={() =>
                    startEdit(task)
                  }
                >
                  Update
                </button>

                <button
                  onClick={() =>
                    deleteTask(
                      task.id
                    )
                  }
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}