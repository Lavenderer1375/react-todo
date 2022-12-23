import { useState, createContext } from "react";

export const Cardcontext = createContext();
//if you want to use context you have to call this function

function CardProvider(props) {
  const [cards, setCards] = useState([]);
  return (
    <Cardcontext.Provider value={[cards, setCards]}>
      {props.children}
    </Cardcontext.Provider>
  );
}

export default CardProvider;
