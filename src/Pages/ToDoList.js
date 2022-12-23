import {useContext} from "react"
import Input from "../Components/UI/Input"
import Card from "../Components/UI/Cards/Card";
import { Cardcontext } from "../Components/UI/Cards/Cardscontext";

const TodoList = () => {
  const [cards, setCards] = useContext(Cardcontext)
    return (
      <>
        <Input />
        <div className="flex flex-wrap justify-evenly space-x-2 flex-row mt-1 bg-slate-300 mb-60">
          {cards?.map((card) => (
            <>
              <Card task={card.task} />
            </>
        ))}
        </div>
      </>
    );
};

export default TodoList;
