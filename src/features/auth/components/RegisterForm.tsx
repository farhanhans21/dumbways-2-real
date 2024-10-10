import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  Input,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import TitleAuth from "../../ui/LabelAuth";
import useRegisterForm from "../hooks/use-register-form";
function RegisterForm() {
  const navigate = useNavigate();
  const { handleSubmit, register, onSubmit } = useRegisterForm();
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
                Create Account Circle
              </TitleAuth>
              <CardBody>
                <FormControl>
                  <Input
                    placeholder="Masukan nama Anda"
                    color={"white"}
                    {...register("fullName")}
                    type="text"
                  />
                  <Input
                    placeholder="Masukan email Anda"
                    color={"white"}
                    mt={5}
                    {...register("email")}
                    type="email"
                  />
                  <Input
                    mt={5}
                    placeholder="Masukan password Anda"
                    color={"white"}
                    {...register("password")}
                    type="password"
                  />
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    <Link
                      as="button"
                      mt={3}
                      color="#04A51E"
                      onClick={() => navigate("/")}
                    >
                      Already Have Account?
                    </Link>
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
                    Register
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

export default RegisterForm;
