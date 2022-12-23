import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-16 font[Poppins] mb-96">
      <h1 className="text-indigo-700 text-4xl lg:text-7xl  font-bold mb-10 drop-shadow-xl">
        Welcome to To-Do App!
      </h1>
      <p className="text-black text-2xl font-bold mb-5 drop-shadow-xl">
        What is your focus for today?
      </p>
      <p>
        <Link to="/todolist" className="text-xl text-black underline">
          List Them Here
        </Link>
      </p>
    </div>
  );
};

export default Home;
