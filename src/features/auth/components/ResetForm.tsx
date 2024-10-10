
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  Input
} from "@chakra-ui/react";
import TitleAuth from "../../ui/LabelAuth";
import userResetForm from "../hooks/use-reset-form";

function ResetForm() {

  const { handleChange, handleSubmit } = userResetForm();

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
                <Input
                color={'white'}
                  mt={5}
                  placeholder="Masukan password baru Anda"
                  type="password"
                  onChange={handleChange}
                />
                <Input
                color={'white'}
                  mt={5}
                  placeholder="Konfirmasi password baru Anda"
                  type="password"
                  onChange={handleChange}
                />
              <Button
              mt={5}
                    width={'100%'}
                    border={'none'}
                    height={'30px'}
                    fontSize={'15px'}
                    color={'#FFFFFF'}
                    cursor={'pointer'}
                    fontWeight={'bold'}
                    borderRadius={'15px'}
                    onClick={handleSubmit}
                    backgroundColor={'#04A51E'}
                    _hover={{backgroundColor: '#FFFFFF', color: 'black'}}>Reset</Button>
              </FormControl>
            </CardBody>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default ResetForm;
