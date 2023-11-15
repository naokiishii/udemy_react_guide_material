import { useContext } from "react";
import { themeContext } from "../Example";

const Main = () => {
    const [theme] = useContext(themeContext);
    return (
        <main className={`content-${theme}`}><h1>テーマの切り替え</h1></main>
    )
  
};

export default Main;
