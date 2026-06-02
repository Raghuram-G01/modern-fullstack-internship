// to do list

// enum for priority
enum Priority {
    Low = "low",
    Medium = "medium",
    High = "high",
}
// interface for task
interface Task {
  title: string;
  id: number;
  isCompleted: boolean;
  priority: Priority;
}

// create the empty array
let tasks: Task[] = [];

// show tasks
const showTasks = (): void => {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }
  console.log("All Tasks:");
  tasks.forEach((task) => {
    console.log(
      `ID: ${task.id}\nTitle: ${task.title}\nCompleted: ${task.isCompleted}\nPriority: ${task.priority}`,
    );
  });
};
showTasks();

// add task
const addTask = (task: Task): void => {
  const existingTask = tasks.find((t) => {
    return t.id === task.id || t.title === task.title;
  });
  if (existingTask) {
    console.log("Task already exists.");
    return;
  }
  tasks.push(task);
  console.log("Task added successfully");
  showTasks();
};

const task1: Task = {
  title: "Buy groceries",
  id: 1,
  isCompleted: false,
  priority: Priority.High,
};
const task2: Task = {
  title: "Complete assignment",
  id: 2,
  isCompleted: false,
  priority: Priority.Medium,
};
addTask(task1);
addTask(task2);

// serach tasks with id
const searchTaskById = (id: number): Task | undefined => {
  return tasks.find((task) => task.id === id);
};
const foundTask = searchTaskById(2);
console.log(typeof foundTask);
if (foundTask) {
  console.log("Task found:", foundTask);
} else {
  console.log("Task not found");
}

// delete task
const deleteTask = (id: number): void => {
  const newTask = tasks.filter((task) => task.id !== id);
  if (newTask.length === tasks.length) {
    console.log("Task not found");
  } else {
    tasks = newTask;
    console.log("Task deleted successfully");
  }
};

deleteTask(1);

// update task
function updateTask(
  id: number,
  title?: string,
  isCompleted?: boolean,
  priority?: Priority,
): void {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    if (title !== undefined) task.title = title;
    if (isCompleted !== undefined) task.isCompleted = isCompleted;
    if (priority !== undefined) task.priority = priority;
    console.log(`Task with ID ${id} updated successfully!`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

updateTask(2, "Complete TypeScript assignment", true, Priority.High);

showTasks();



/*





event handler:
functions that hanlde the event when triggered



*/