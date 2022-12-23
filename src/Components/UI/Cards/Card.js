import { useState, useContext } from "react";
import { Checkcontext } from "./CheckContext";
import { Deletecontext } from "./Deletecontext";

const Card = ({ task }) => {
  let [checked, setChecked] = useContext(Checkcontext);
  let [checkbox, setCheckbox] = useState(true);

  const doneChecker = () => {
    if (checkbox === true) {
      setChecked(checked + 1);
    } else {
      setChecked(checked - 1);
    }
    setCheckbox(!checkbox)
  };

  let [deleted, setDeleted] = useContext(Deletecontext);
  let [toggle, setToggle] = useState(true);
  let [create, setCreate] = useState(true);
  
  const Deleter = () => {
    if (toggle === true) {
      setChecked(checked - 1)
    } else {
      setChecked(checked - 1)
    }
    setToggle(!toggle)
    console.log("deleted");
  }


  return (
    <div className={toggle ? "block" : "hidden"}>
      <div className="max-w rounded overflow-hidden shadow-lg bg-indigo-300 mb-7 px-3">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{task}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span
            onClick={doneChecker}
            className="inline-block rounded-full px-3 py-1 text-3xl font-semibold text-gray-700 mr-2 mb-2"
          >
            <ion-icon
              name={checkbox ? "checkbox-outline" : "checkbox"}
            ></ion-icon>
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-3xl font-semibold text-gray-700 mr-2 mb-2">
            <ion-icon
              onClick={() => setCreate(!create)}
              name={create ? "create-outline" : "create"}
            ></ion-icon>
          </span>
          <span
            onClick={Deleter}
            className="inline-block rounded-full px-3 py-1 text-3xl font-semibold text-gray-700 mr-2 mb-2"
          >
            <ion-icon name="trash-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

// write a state named "data" it's an array of objects including different tasks. I should use this to build the cards, with mapping this state.
