import { useCallback, useState } from "react";
import Todos from "./toDo";

const Demo2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div className="flex">
        <Todos todos={todos} addTodo={addTodo} />
      </div>
      <div className="flex">
        <label className="font-bold mt-2 p-2">Count: {count}</label>
        <button
          className="p-2 font-bold text-white m-2 bg-gray-700 rounded-lg"
          onClick={increment}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Demo2;
