// find function
// returns the fiirst element, it could be a number, string, object.
// Returns:
// first matching value
// undefined if nothing matches



// Practice purpose

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const arr: Task[] = [
  {
    id: 1,
    title: "JS",
    isCompleted: false,
  },
  {
    id: 2,
    title: "TS",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Python",
    isCompleted: false,
  },
];

function findTaskById(id: number): Task | undefined {
  return arr.find((task) => {
    return task.id === id;
  });
}

const foundTask = findTaskById(2);
if (foundTask) {
  console.log("Task found:", foundTask);
} else {
  console.log("Task not found");
}

// const nums = [1, 2, 3, 4];
// const num = nums.find(n => {
//     return n>2;
// })
// console.log(num);


function showAll():void{
    console.log("All tasks:");
    arr.forEach(task => {
        console.log(task.title);
    })
}
showAll();