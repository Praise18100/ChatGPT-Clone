import {
  VStack,
  Flex,
  Input,
  Button,
  Heading,
  Field,
  For,
  NativeSelect,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";

export default function StepTwo() {
  const { data, updateData } = useRegister();
  const navigate = useNavigate();

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
        Step 2: Education
      </Heading>

      <Field.Root pt="10%">
        <Field.Label fontWeight="bolder" fontSize="md">
          University/College
        </Field.Label>

        <Input
          value={data.uni}
          
          onChange={(e) => updateData({ uni: e.target.value })}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md">
          Qualification/Degree
        </Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            value={data.degree}
            onChange={(e) => updateData({ degree: e.target.value })}
            name=""
          >
            <For each={[" ", "Bsc", "Msc", "HND", "PhD"]}>
              {(item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              )}
            </For>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>

      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md">
          Course of Study
        </Field.Label>

        <Input
          value={data.course}
          onChange={(e) => updateData({ course: e.target.value })}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md">
          Year of Graduatiom
        </Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            value={data.grad}
            onChange={(e) => updateData({ grad: e.target.value })}
            name=""
          >
            <For each={[" ", "2025", "2024", "2023", "2022"]}>
              {(item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              )}
            </For>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>

      <Flex gap="2%" mt={20}>
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
          onClick={() => navigate("/register/step1")}
        >
          Previous
        </Button>
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
          onClick={() => navigate("/register/step3")}
        >
          Next
        </Button>
      </Flex>
    </VStack>
  );
}
