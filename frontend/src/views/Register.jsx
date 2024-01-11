import { Link as ReactLink } from "react-router-dom";
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
                placeholder={"Email"}
                _placeholder={{ color: placeHolderColor }}
                type="email"
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
              <Input
                border="1px"
                borderColor="black"
                m={inputMargin}
                placeholder={"ConfirmPassword"}
                _placeholder={{ color: placeHolderColor }}
                type="password"
              />

              <Button m={inputMargin} colorScheme="blue">
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
