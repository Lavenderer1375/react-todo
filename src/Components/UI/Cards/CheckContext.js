import { useState, createContext } from "react";

export const Checkcontext = createContext();


function CheckProvider(props) {
  const [checked, setChecked] = useState(0);
  return (
    <Checkcontext.Provider value={[checked, setChecked]}>
      {props.children}
    </Checkcontext.Provider>
  );
}

export default CheckProvider;
