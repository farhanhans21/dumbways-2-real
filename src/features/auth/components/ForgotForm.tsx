import React from "react";
import {
  Card,
  Input,
  CardBody,
  Box,
  Container,
  FormControl,
  Button,
} from "@chakra-ui/react";
import TitleAuth, { LabelAuth } from "../../ui/LabelAuth";

function ForgotForm() {
  return (
    <>
      <Box w="100vw" h="100vh" bg="black">
        <Container pt={50}>
          <Card bg="black">
            <TitleAuth fontSize="6xl" fontColor="#04A51E" fontWeight="bold">
              Circle
            </TitleAuth>
            <TitleAuth fontSize="4xl" fontColor="white" fontWeight="bold">
              Forgot Password
            </TitleAuth>
            <CardBody>
              <FormControl>
                <LabelAuth
                  fontColor="white"
                  fontSize="5md"
                  fontWeight="semibold"
                >
                  password
                </LabelAuth>
                <Input
                  color={"white"}
                  mt={5}
                  placeholder="Masukan password Anda"
                  name="password"
                  type="password"
                />
                <LabelAuth
                  fontColor="white"
                  fontSize="5md"
                  fontWeight="semibold"
                >
                  Already Have Account?
                </LabelAuth>
                <Button
                  mt={5}
                  width={"100%"}
                  border={"none"}
                  height={"30px"}
                  fontSize={"15px"}
                  color={"#FFFFFF"}
                  cursor={"pointer"}
                  fontWeight={"bold"}
                  borderRadius={"15px"}
                  // onClick={handleSubmit}
                  backgroundColor={"#04A51E"}
                  _hover={{ backgroundColor: "#FFFFFF", color: "black" }}
                >
                  Save
                </Button>
              </FormControl>
            </CardBody>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default ForgotForm;
