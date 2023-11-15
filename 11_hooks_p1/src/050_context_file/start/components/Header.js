import { useContext } from "react";
import { themeContext } from "../Example";

const Header = () => {
  const THEMES = ['light', 'dark', 'red'];

  const [theme, setTheme] = useContext(themeContext);
  const changeTheme = (e) => setTheme(e.target.value)

  return (
    <header className={`content-${theme}`}>
      {(THEMES ?? []).map(t => <label key={t}><input type="radio" value={t} checked={t === theme} onChange={changeTheme}></input>{t}</label>)}
    </header>
  );
};

export default Header;
