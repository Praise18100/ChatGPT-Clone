import { VStack, HStack, Input, Button, Heading, Field, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";

export default function StepOne() {
  const { data, updateData } = useRegister();
  const navigate = useNavigate();
  const genders = ["Male", "Female", "Other"];

  return (
    <VStack
      w="50%"
      maxW="70%"
      mx="auto"
      mt="5"
      color="teal.600"
      bg="gray.50"
      px="20"
      pt="10"
      pb="10"
      mb="20"
      borderLeftWidth="10px"
      borderLeftColor="teal.600"
    >
      <Heading size="2xl" fontWeight="bolder">
        Step 1: Personal Info
      </Heading>

      <Field.Root pt="10%" >
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px">
          First Name
        </Field.Label>
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
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px" pt="4%">
          Last Name
        </Field.Label>
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
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px" pt="4%">
          Email
        </Field.Label>
        <Input
          placeholder="Email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md"pb="3px" pt="4%">
          Gender
        </Field.Label>

        <HStack gap={30} align="start">
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
        </HStack>
      </Field.Root>

     <Flex mt={10}>
       <Button
        size="xl"
        w="200px"
        mr="3"
        color="white"
        bg="teal.600"
        cursor="pointer"
        borderRadius="full"
        _hover={{ opacity: 0.8 }}
        mt="15"
        mx="5"
        onClick={() => navigate("/register/step2")}
      >
        Next
      </Button>
     </Flex>
    </VStack>
  );
}
