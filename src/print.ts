import { Todo } from "types/todo";

export const printService = {
  firstTwenty: (todos: Todo[]): void =>{
    for (const todo of todos) {
      console.log(`Id: ${todo.id} Title: ${todo.title} Completed: ${todo.completed}\n`);
    }
  }
};