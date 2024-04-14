
import { main } from "../src/main";
import { todoService } from "../src/todos";
import { printService } from "../src/print";

describe("main", () => {
  it("should call fetchAllTodos,filterOnlyEvenTodos and displayFirstTwenty with correct arguments", async () => {
    const todos = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 2, id: 2, title: "todo 2", completed: true }
    ];
    
    jest.spyOn(todoService, "fetchTodos").mockResolvedValue(todos);
    jest.spyOn(todoService, "filterOnlyEvenTodos").mockReturnValue({} as any);
    jest.spyOn(printService, "firstTwenty").mockReturnValue({} as any);
    await main();

    // Check if all necessary functions were called with correct arguments
    expect(todoService.fetchTodos).toHaveBeenCalledTimes(1);
    expect(todoService.filterOnlyEvenTodos).toHaveBeenCalledTimes(1);
    expect(todoService.filterOnlyEvenTodos).toHaveBeenCalledWith(todos);
    expect(printService.firstTwenty).toHaveBeenCalledTimes(1);
    
    jest.clearAllMocks();
  });

  it("handles errors when call referenced method", async () => {
    const errorMessage = "Failed to call fetchTodos";
    jest.spyOn(todoService, "fetchTodos").mockRejectedValue(errorMessage);
    
    const originalConsoleError = console.error;
    const errorMock = jest.fn();
    console.error = errorMock;
  
    await main();
  
    expect(errorMock).toHaveBeenCalledWith("Error:", errorMessage);
    console.error = originalConsoleError;
    jest.clearAllMocks();
  });
});

