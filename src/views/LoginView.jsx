import { useEffect, useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import {
  Input,
  Button,
  FormLabel,
  Center,
  Card,
  CardBody,
  Text,
  Stack,
  Link,
  Box,
  Heading,
} from "@chakra-ui/react";

export const LoginView = ({ screenLogin }) => {
  const [change, setChange] = useState("");
  const [screen, setScreen] = useState();
  const { handleUser } = useUserContext();

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleUser(change);
    localStorage.setItem("user", JSON.stringify(change));
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    alert("This function doesn't yet work");
  };

  useEffect(() => {
    setScreen({ screenLogin });
    console.log(screen);
  }, [screenLogin]);

  return (
    <div>
      <Center height="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)">
        <Card colorScheme="gray" variant="filled" maxW="lg">
          <CardBody p="20">
            {/* this could be further refactored, this is just to use one view atm*/}
            {screen ? (
              <form
                onSubmit={screen ? handleSubmitLogin : handleSubmitRegister}>
                <Stack spacing="20px">
                  <Box>
                    <Heading size="md" align="initial">
                      Login
                    </Heading>
                    <Text py="2" fontSize="sm" align="initial">
                      Continue tracking your project's time.
                    </Text>
                  </Box>
                  <Box>
                    <FormLabel as="user">Username</FormLabel>
                    <Input type="text" onChange={handleChange} />
                  </Box>
                  <Box>
                    <Button
                      bg="#8125C5"
                      color="white"
                      colorScheme="gray"
                      my="2"
                      width="100%"
                      _hover={{ bg: "#141414" }}
                      onClick={handleSubmitLogin}>
                      Submit
                    </Button>
                    <Text fontSize="sm" align="initial">
                      Don't have an accont?{" "}
                      <Link color="#8125C5" onClick={() => setScreen(false)}>
                        Register now
                      </Link>
                    </Text>
                  </Box>
                </Stack>
              </form>
            ) : (
              <form onSubmit={handleSubmitRegister}>
                <Stack spacing="20px">
                  <Box>
                    <Heading size="md" align="initial">
                      Register
                    </Heading>
                    <Text py="2" fontSize="sm" align="initial">
                      Begin your journey tracking your project's time.
                    </Text>
                  </Box>
                  <Box>
                    <FormLabel as="user">Username</FormLabel>
                    <Input type="text" onChange={handleChange} />
                  </Box>
                  <Box>
                    <Button
                      bg="#8125C5"
                      color="white"
                      colorScheme="gray"
                      my="2"
                      width="100%"
                      _hover={{ bg: "#141414" }}
                      onClick={handleSubmitRegister}>
                      Register
                    </Button>
                    <Text fontSize="sm" align="initial">
                      Already have an accont?{" "}
                      <Link color="#8125C5" onClick={() => setScreen(true)}>
                        Login
                      </Link>
                    </Text>
                  </Box>
                </Stack>
              </form>
            )}
          </CardBody>
        </Card>
      </Center>
    </div>
  );
};
