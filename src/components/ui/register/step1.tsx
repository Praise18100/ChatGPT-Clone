import {
  VStack,
  Input,
  Button,
  Heading,
  Field,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";

export default function StepOne() {
  const { data, updateData } = useRegister();
  const navigate = useNavigate();
  const genders = ["Male", "Female", "Other"];

  return (
    <VStack w="500px" maxW="1000px" mx="auto" mt={20}>
      <Heading size="md">Step 1: Personal Info</Heading>

      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Input
          placeholder="First Name"
          value={data.firstName}
          onChange={(e) =>
            updateData({
              firstName: e.target.value,
            })
          }
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Last Name</Field.Label>
        <Input
          placeholder="Last Name"
          value={data.lastName}
          onChange={(e) =>
            updateData({
              lastName: e.target.value,
            })
          }
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Gender</Field.Label>
        
        <VStack gap ={3} align="start">
          {genders.map((gender) => (
            <label key={gender}>
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={data.gender === gender}
                onChange={(e) => updateData({ gender: e.target.value })}
              />
              {gender}
            </label>
          ))}
        </VStack>
      </Field.Root>

      <Button
        colorPalette="teal"
        w="200px"
        mt={15}
        onClick={() => navigate("/register/step2")}
      >
        Next
      </Button>
    </VStack>
  );
}
