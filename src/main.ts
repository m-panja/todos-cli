import { printService } from "../src/print";
import { todoService } from "../src/todos";

export async function main(): Promise<void> {
  try {
    const todos = await todoService.fetchTodos();
    const evenTodos = todoService.filterOnlyEvenTodos(todos);
    printService.firstTwenty(evenTodos);
  } catch (error: any) {
    console.error("Error:", error);
  }
}

main();