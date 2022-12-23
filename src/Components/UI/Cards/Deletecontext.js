import { useState, createContext } from "react";

export const Deletecontext = createContext();

function DeleteProvider(props) {
  const [deleted, setDeleted] = useState(0);
  return (
    <Deletecontext.Provider value={[deleted, setDeleted]}>
      {props.children}
    </Deletecontext.Provider>
  );
}

export default DeleteProvider;
