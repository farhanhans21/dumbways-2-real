import React, { useState } from "react";
import {
  Card,
  Input,
  CardBody,
  Box,
  Container,
  FormControl,
  Link,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { useLoginForm } from "../hooks/use-login-form";
import TitleAuth, { LabelAuth } from "../../ui/LabelAuth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const { handleSubmit, register, onSubmit } = useLoginForm();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box w="100vw" h="100vh" bg="black">
          <Container pt={50}>
            <Card bg="black">
              <TitleAuth fontSize="6xl" fontColor="#04A51E" fontWeight="bold">
                Circle
              </TitleAuth>
              <TitleAuth fontSize="4xl" fontColor="white" fontWeight="bold">
                Login to Circle
              </TitleAuth>
              <CardBody>
                <FormControl>
                  <Input
                    placeholder="Masukan email Anda"
                    color={"white"}
                    {...register("userName")}
                    type="text"
                  />
                  <Input
                    mt={5}
                    {...register("password")}
                    color={"white"}
                    placeholder="Masukan password Anda"
                    type="password"
                  />
                  <Link
                    as="button"
                    onClick={() => navigate("/reset")}
                    color={"white"}
                    mt={2}
                    display={"flex"}
                    flexDirection={"row-reverse"}
                    textDecoration={"none"}
                  >
                    Lupa password?
                  </Link>

                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <Wrap>
                      <WrapItem>
                        <LabelAuth
                          fontColor="white"
                          fontSize="5md"
                          fontWeight="semibold"
                        >
                          Dont have an account yet?
                        </LabelAuth>
                      </WrapItem>
                      <WrapItem mt={"11px"}>
                        <Link
                          as="button"
                          onClick={() => navigate("/register")}
                          color={"#04A51E"}
                        >
                          Create account
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Box>
                  <Button
                    type={"submit"}
                    mt={5}
                    width={"100%"}
                    border={"none"}
                    height={"30px"}
                    fontSize={"15px"}
                    color={"#FFFFFF"}
                    cursor={"pointer"}
                    fontWeight={"bold"}
                    borderRadius={"15px"}
                    backgroundColor={"#04A51E"}
                    _hover={{ backgroundColor: "#FFFFFF", color: "black" }}
                  >
                    Login
                  </Button>
                </FormControl>
              </CardBody>
            </Card>
          </Container>
        </Box>
      </form>
    </>
  );
}

export default LoginForm;
