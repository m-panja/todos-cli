import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchAllTodos(): Promise<Todo[]> {
  try {
    const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

export function filterOnlyEvenTodos(todos: Todo[]): Todo[] {
  return todos.filter((todo, index) => {
    // Include only even numbered todos and stop after 20
    return todo.id % 2 === 0 && index < 20;
  });
}


export function displayFirstTwenty(todos: Todo[]) {
  for (const todo of todos) {
    console.log(`Id: ${todo.id} Title: ${todo.title} Completed: ${todo.completed}\n`);
  }
  return null;
}

export async function main() {
  try {
    const todos = await fetchAllTodos();
    const evenTodos = filterOnlyEvenTodos(todos);
    displayFirstTwenty(evenTodos);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();