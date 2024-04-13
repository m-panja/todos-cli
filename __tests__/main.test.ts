import axios from "axios";
import { fetchAllTodos, filterOnlyEvenTodos, Todo } from "../src/main";

jest.mock("axios");

describe("fetchTodos", () => {
  it("fetches todos from the API", async () => {
    const mockData: Todo[] = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 1, id: 2, title: "todo 2", completed: true },
    ];
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockData });

    const todos = await fetchAllTodos();

    expect(todos).toEqual(mockData);
  });

  it("handles errors when fetching todos", async () => {
    const errorMessage = "Failed to fetch todos";
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    await expect(fetchAllTodos()).rejects.toThrow(errorMessage);
  });
});

describe("filterEvenTodos", () => {
  it("filters even numbered todos", () => {
    const todos: Todo[] = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 1, id: 2, title: "todo 2", completed: true },
      { userId: 1, id: 3, title: "todo 3", completed: false },
    ];
    const expectedEvenTodos: Todo[] = [
      { userId: 1, id: 2, title: "todo 2", completed: true },
    ];

    const evenTodos = filterOnlyEvenTodos(todos);

    expect(evenTodos).toEqual(expectedEvenTodos);
  });

  it("returns an empty array if no even todos found", () => {
    const todos: Todo[] = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 1, id: 3, title: "todo 3", completed: false },
    ];

    const evenTodos = filterOnlyEvenTodos(todos);

    expect(evenTodos).toEqual([]);
  });
});

