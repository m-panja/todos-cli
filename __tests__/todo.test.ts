import axios from "axios";
import { Todo } from "types/todo";
import { todoService } from "../src/todos";

jest.mock("axios");
describe("fetchAllTodos", () => {
  it("fetches todos from the API", async () => {
    const mockData: Todo[] = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 1, id: 2, title: "todo 2", completed: true },
    ];
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockData });

    const todos = await todoService.fetchTodos();

    expect(todos).toEqual(mockData);
  });

  it("handles errors when fetching todos", async () => {
    const errorMessage = "Failed to fetch todos";
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    await expect(todoService.fetchTodos()).rejects.toThrow(errorMessage);
  });
});

describe("filterOnlyEvenTodos", () => {
  let todos: Todo[];
  it("filters even numbered todos", () => {
    todos = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 1, id: 2, title: "todo 2", completed: true },
      { userId: 1, id: 3, title: "todo 3", completed: false },
    ];
    const expectedEvenTodos: Todo[] = [
      { userId: 1, id: 2, title: "todo 2", completed: true },
    ];

    const evenTodos = todoService.filterOnlyEvenTodos(todos);

    expect(evenTodos).toEqual(expectedEvenTodos);
  });

  it("returns an empty array if no even todos found", () => {
    todos = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 1, id: 3, title: "todo 3", completed: false },
    ];

    const evenTodos = todoService.filterOnlyEvenTodos(todos);

    expect(evenTodos).toEqual([]);
  });
});