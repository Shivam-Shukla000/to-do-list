import { Outlet, Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Spacer,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import Navigation from "./Components/Navigation";
import Addtask from "./Components/Addtask";
export default function Layouts() {
  const {
    isOpen: taskState,
    onOpen: taskOn,
    onClose: taskOff,
  } = useDisclosure();
  const { isOpen: NavState, onOpen: NavOn, onClose: NavOff } = useDisclosure();
  return (
    <>
      <Flex bg={"#444444"} textColor={"black"}>
        <Avatar m={"5px 5px 5px 15px"} src="register.gif" onClick={NavOn} />

        <Link to="/">
          <Box fontSize={"20px"} m={"5px"} p={"10px"}>
            Home
          </Box>
        </Link>

        <Link to="/folders">
          <Box fontSize={"20px"} m={"5px"} p={"10px"}>
            Folders
          </Box>
        </Link>
        <Spacer />

        <Button
          bg={"#7a7ceb"}
          textColor={"white"}
          m={"8px 10px 8px 8px "}
          p={"auto"}
          onClick={taskOn}
        >
          Add Task
        </Button>
        <Navigation state={NavState} close={NavOff} />
        <Addtask state={taskState} close={taskOff} />
      </Flex>
      <Outlet />
    </>
  );
}
