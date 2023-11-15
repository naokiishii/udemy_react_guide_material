import List from "../../components/list";
import { useAppContext } from "../../context/AppContext";

export default function PageList() {
  const [list, setList] = useAppContext();
  return <List list={list} />
}