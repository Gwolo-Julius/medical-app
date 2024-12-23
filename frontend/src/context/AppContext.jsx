import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();
const AppContextProvider = (prop) => {
  const currencySymbol = "$";

  const value = {
    doctors,
    currencySymbol,
  };
  return (
    <AppContext.Provider value={value}>{prop.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
