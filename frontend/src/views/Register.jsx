import { Link as ReactLink } from "react-router-dom";
import { useState } from "react";
import { register } from "../utils/auth";
import {
  Box,
  Input,
  FormControl,
  Container,
  AbsoluteCenter,
  Flex,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";

export default function Register() {
  const inputMargin = "10px 5px 10px 5px";
  const placeHolderColor = "blue";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passAuth, setPassAuth] = useState("");
  async function handleSubmit() {
    if (password !== confirmPassword) {
      setPassAuth("password does not match");
      return;
    }
    const userData = {
      name: username,
      email,
      password,
    };
    const data = await register(userData);
  }
  return (
    <>
      <Box
        border="4px"
        w={"100vw"}
        h={"100vh"}
        m={"0px"}
        p={"0px"}
        bgImage="url('./register.gif')"
      >
        <AbsoluteCenter
          backdropFilter={"auto"}
          backdropBlur={"30px"}
          p={"30px"}
          border="1px"
          borderColor="black"
          borderRadius="5px"
        >
          <Flex flexDirection={"column"}>
            <FormControl>
              <Input
                border="1px"
                borderColor="black"
                m={inputMargin}
                placeholder={"Username"}
                _placeholder={{ color: placeHolderColor }}
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <Input
                border="1px"
                borderColor="black"
                m={inputMargin}
                placeholder={"Email"}
                _placeholder={{ color: placeHolderColor }}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <br />
              <Input
                border="1px"
                borderColor="black"
                m={inputMargin}
                placeholder={"Password"}
                _placeholder={{ color: placeHolderColor }}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <br />
              <Input
                border="1px"
                borderColor="black"
                m={inputMargin}
                placeholder={"ConfirmPassword"}
                _placeholder={{ color: placeHolderColor }}
                type="password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
              />
              <br />
              <Box>{passAuth}</Box>

              <Button onClick={handleSubmit} m={inputMargin} colorScheme="blue">
                Register
              </Button>
            </FormControl>
            <br />
            <Box color={"black"}>
              already have an account? click{" "}
              <ChakraLink as={ReactLink} color="white" to="/login">
                here
              </ChakraLink>
            </Box>
          </Flex>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
