import { useState, useContext } from 'react';
import { Cardcontext } from './Cards/Cardscontext';

const Input = () => {
  const [cards, setCards] = useContext(Cardcontext);
  const [task, setTask] = useState('');
  const updateTask = (e) => {
    setTask(e.target.value);
  };
  const addCards = (e) => {
    e.preventDefault();
    setCards((prevState) => [...prevState, { task: task }]);
    setTask('');
  };

  return (
    <form onSubmit={addCards}>
      <h2 className="text-xl mt-5 text-center text-indigo-700">
        Please Do not Delete a Task before ticking it "done"!
      </h2>
      <h2 className="text-xl text-center text-indigo-700">
        Click on the Logo to go back to Home Page.
      </h2>
      <div className="flex w-full p-4 mt-5">
        <input
          className="appearance-none block w-full bg-gray-50 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:text-indigo-700"
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={updateTask}
        />
        <button className="flex bg-indigo-700 p-3 h-full rounded-lg ml-3 text-white shadow-lg hover:bg-indigo-300 hover:text-black duration-200">
          Add
        </button>
      </div>
    </form>
  );
};

export default Input;
