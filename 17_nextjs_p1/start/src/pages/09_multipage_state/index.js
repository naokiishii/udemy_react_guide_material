import { useState } from "react";
import Form from "../../components/form";
import List from "../../components/list";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

export default function PageLink() {
  const initialState = { name: "", birth: "" };
  const [value, setValue] = useState(initialState);
  const [list, setList] = useAppContext();
  const router = useRouter();

  const handleChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    setValue((prev) => ({...prev, [inputId]: inputValue}));
  };
  const handleAddCLick = () => {
    setList((prev) => [...prev, { ...value, id: new Date().getTime() }]);
    setValue(initialState);
  }
  const handleResetClick = () => {
    setList([]);
  }
  return (
    <div>
      <Form
        handleAddClick={handleAddCLick}
        handleResetClick={handleResetClick}
        handleChange={handleChange}
        nameValue={value.name}
        birthValue={value.birth}
      />
      <List list={list} />
      <button onClick={() => router.push('/09_multipage_state/list')}>to list page</button>
    </div>
  );
}