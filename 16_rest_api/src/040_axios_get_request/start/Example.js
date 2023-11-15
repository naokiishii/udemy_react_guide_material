import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    axios.get('http://localhost:3003/user').then((res) => {
      console.log(res)
    })
  })

  useEffect(() => {
    const getTodo = async () => {
      const res = await axios.get('http://localhost:3003/user');
      console.log(res);
    }
    getTodo();
  })
};

export default Example;
