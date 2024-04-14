import { printService } from "../src/print";

describe("displayFirstTwenty", ()=>{
  it("display even numbered todos with Id, title and completed status", () => {
    const todos = [
      { userId: 1, id: 1, title: "todo 1", completed: false },
      { userId: 1, id: 2, title: "todo 2", completed: true },
      { userId: 1, id: 3, title: "todo 3", completed: false },
    ];

    // Mock console.log
    const originalLog = console.log;
    const logMock = jest.fn();
    console.log = logMock;

    // Call the function
    printService.firstTwenty(todos);

    // Check if console.log was called with the correct arguments
    expect(logMock).toHaveBeenCalledTimes(todos.length); // Ensure console.log was called once for each todo
    expect(logMock.mock.calls[0][0]).toBe("Id: 1 Title: todo 1 Completed: false\n");
    expect(logMock.mock.calls[1][0]).toBe("Id: 2 Title: todo 2 Completed: true\n");
    expect(logMock.mock.calls[2][0]).toBe("Id: 3 Title: todo 3 Completed: false\n");

    // Restore console.log
    console.log = originalLog;
  });
});