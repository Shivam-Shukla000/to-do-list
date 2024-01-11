import { Link as ReactLink } from "react-router-dom";
import {
  AbsoluteCenter,
  FormControl,
  Box,
  Input,
  Button,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";

export default function Login() {
  const inputMargin = "10px 5px 10px 5px";
  const placeHolderColor = "blue";
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
              />
              <br />
              <Input
                border="1px"
                borderColor="black"
                m={inputMargin}
                placeholder={"Password"}
                _placeholder={{ color: placeHolderColor }}
                type="password"
              />
              <br />
              <Button m={inputMargin} colorScheme="blue">
                Login
              </Button>
            </FormControl>
            <br />
            <Box color={"black"}>
              don't have an account? click{" "}
              <ChakraLink as={ReactLink} color="white" to="/register">
                here
              </ChakraLink>
            </Box>
          </Flex>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
