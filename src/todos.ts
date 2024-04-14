import axios from "axios";
import { Todo } from "types/todo";

export const todoService = {
  fetchTodos: async (): Promise<Todo[]> => {
    try {
      const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
      return response.data;
    } catch (error: any) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  },

  filterOnlyEvenTodos: (todos: Todo[]): Todo[] => {
    return todos.filter((todo, index) => {
      // Include only even numbered todos and stop after 20
      return todo.id % 2 === 0 && index < 20;
    });
  }

};