import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <div className="flex h-16">
      <h2 className="font-extrabold mt-2 p-2">My Todos</h2>
      <button
        className="p-2 font-bold text-white m-2 bg-gray-700 rounded-lg"
        onClick={addTodo}
      >
        Add Todo
      </button>
      </div>
      <div className="flex flex-col overflow-x-auto">
      {todos.map((todo, index) => {
        return (
          <div className="bg-red-400 p-1 m-1" key={index}>
            {todo}
          </div>
        );
      })}
      </div>
    </>
  );
};

export default memo(Todos);
