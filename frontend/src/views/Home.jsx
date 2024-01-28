import { Box, Flex, list, useDisclosure } from "@chakra-ui/react";
import { getGoal, addGoal } from "../utils/goal";
import TodoElement from "../Components/TodoElement";
import { useEffect, useState } from "react";
import UpdateTask from "../Components/UpdateTask";
import DeleteTask from "../Components/DeleteTask";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [updateText, setUpdateText] = useState("");
  const [updateTextId, setUpdateTextId] = useState();
  const [renderList, setRenderList] = useState();
  const [deleteTaskId, setDeleteTaskId] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await getGoal();
      setTodos(response.data);
    }
    fetchData();
  }, []);
  const {
    isOpen: updateState,
    onOpen: updateOn,
    onClose: updateOff,
  } = useDisclosure();

  const {
    isOpen: deleteState,
    onOpen: deleteOn,
    onClose: deleteOff,
  } = useDisclosure();

  useEffect(() => {
    const list = todos.map((todo) => {
      return (
        <TodoElement
          setUpdateTextId={setUpdateTextId}
          updateStateOn={updateOn}
          setUpdateText={setUpdateText}
          setDeleteTaskId={setDeleteTaskId}
          value={todo.text}
          key={todo._id}
          id={todo._id}
          deleteStateOn={deleteOn}
        />
      );
    });
    setRenderList(list);
  }, [todos]);

  return (
    <>
      <Box h={"100vh"} bg={"black"}>
        <UpdateTask
          todos={todos}
          setTodos={setTodos}
          updateText={updateText}
          updateTextId={updateTextId}
          setUpdateText={setUpdateText}
          state={updateState}
          close={updateOff}
        />
        <DeleteTask
          todos={todos}
          setTodos={setTodos}
          state={deleteState}
          close={deleteOff}
          deleteTaskId={deleteTaskId}
          setDeleteTaskId={setDeleteTaskId}
        />
        <Flex
          h={"100%"}
          bg={"#262626"}
          m={"0% 10% 0% 10%"}
          gap={"10px"}
          paddingTop={"20px"}
          direction={"column"}
        >
          {renderList}
        </Flex>
      </Box>
    </>
  );
}
