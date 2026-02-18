import { VStack, Input, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";

export default function StepTwo() {
  const { data, updateData } = useRegister();
  const navigate = useNavigate();

  return (
    <VStack w= "500px" maxW="1000px" mx="auto" mt={10}>
      <Heading size="md">Step 2: Account Info</Heading>

      <Input
        placeholder="Email"
        value={data.email}
        onChange={(e) => updateData({ email: e.target.value })}
      />

      <Input
        placeholder="Username"
        value={data.username}
        onChange={(e) => updateData({ username: e.target.value })}
      />

      <Button
        colorScheme="teal"
        w="full"
        onClick={() => navigate("/register/step3")}
      >
        Next
      </Button>
    </VStack>
  );
}
