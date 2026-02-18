import { VStack, Input, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";

export default function StepThree() {
  const { data, updateData } = useRegister();
  const navigate = useNavigate();

  return (
    <VStack w= "500px" maxW="1000px" mx="auto" mt={10}>
      <Heading size="md">Step 3: Profile</Heading>

      <Input
        placeholder="Your Bio"
        value={data.bio}
        onChange={(e) => updateData({ bio: e.target.value })}
      />

      <Button
        colorScheme="teal"
        w="full"
        onClick={() => navigate("/register/summary")}
      >
        Next
      </Button>
    </VStack>
  );
}
