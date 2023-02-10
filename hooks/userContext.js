import { createContext, useContext } from "react";

const UserContext = createContext();

export const useUser = () => {
  const values = useContext(UserContext);

  return {
    ...values,
  };
};

export const StateProvider = ({ values, children }) => {
  return (
    <UserContext.Provider
      value={{
        ...values,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
