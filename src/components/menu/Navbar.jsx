import { Flex, Heading, Button, Box, Spacer, Divider } from "@chakra-ui/react";
import { useUserContext } from "../../hooks/useUserContext.jsx";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";
import { Logout } from "@mui/icons-material";
import { useState } from "react";

export function Navbar({ title, showUser }) {
  const { user, handleUser } = useUserContext();
  const { setProject } = useTimerContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(""));
    handleUser("");
    setProject("");
  };

  return (
    <Flex p="5">
      <Box>
        <Heading as="h1" size="xl" noOfLines={1} color="black">
          {title} {showUser ? user : ""}
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button
          bg="#8125C5"
          color="black"
          colorScheme="gray"
          _hover={{ bg: "rgba(0, 0, 0, 0.33)" }}
          onClick={handleSubmit}>
          <Logout fontSize="medium" />
        </Button>
      </Box>
    </Flex>
  );
}
