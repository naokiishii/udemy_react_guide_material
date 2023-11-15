import { useState, createContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export const themeContext = createContext();

const Example = () => {
  const [theme, setTheme] = useState('light')
  
  return (
    <themeContext.Provider value={[theme, setTheme]}>
      <Header />
      <Main />
    </themeContext.Provider>
  );
};

export default Example;
