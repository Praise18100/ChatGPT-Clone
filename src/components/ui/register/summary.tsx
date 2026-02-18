import {  VStack,
  Button,
  Heading,
  Text,
  SimpleGrid,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";

export default function Summary() {
  const { data } = useRegister();
  const navigate = useNavigate();

  return (
       <VStack w= "500px" maxW="1000px" mx="auto" mt={10}>
      <Heading size="xl">Registration Complete</Heading>

      <SimpleGrid columns={2} gap={3} w="100%">
        <Text fontWeight="bold">First Name</Text>
        <Text>{data.firstName}</Text>

        <Text fontWeight="bold">Last Name</Text>
        <Text>{data.lastName}</Text>

        <Text fontWeight="bold">Email</Text>
        <Text>{data.email}</Text>

        <Text fontWeight="bold">Username</Text>
        <Text>{data.username}</Text>

        <Text fontWeight="bold">Bio</Text>
        <Text>{data.bio}</Text>
      </SimpleGrid>
      <Button
      colorScheme="teal"
        w="full"
        onClick={() => navigate("../../")}
      >
        Submit
      </Button>
    </VStack>
  );
}
