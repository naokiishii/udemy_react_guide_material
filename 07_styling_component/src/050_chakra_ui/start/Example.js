import { ChakraProvider } from "@chakra-ui/react"

import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
      <ChakraProvider>
        <h2>Reminder</h2>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
