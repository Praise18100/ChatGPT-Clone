import { VStack, Input, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";

export default function StepOne() {
  const { data, updateData } = useRegister();
  const navigate = useNavigate();

  return (
    <VStack w="500px" maxW="1000px" mx="auto" mt={70}>
      <Heading size="md">Step 1: Personal Info</Heading>

      <Input
        placeholder="First Name"
        value={data.firstName}
        onChange={(e) =>
          updateData({
            firstName: e.target.value,
          })
        }
      />

      <Input
        placeholder="Last Name"
        value={data.lastName}
        onChange={(e) =>
          updateData({
            lastName: e.target.value,
          })
        }
      />

      <Button
        colorScheme="teal"
        w="full"
        onClick={() => navigate("/register/step2")}
      >
        Next
      </Button>
    </VStack>
  );
}
