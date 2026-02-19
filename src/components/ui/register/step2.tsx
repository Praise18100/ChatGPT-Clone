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
    <VStack w="500px" maxW="1000px" mx="auto" mt={20}>
      <Heading size="md">Step 2: Education</Heading>

      <Field.Root>
        <Field.Label>University/College</Field.Label>

        <Input
          value={data.uni}
          onChange={(e) => updateData({ uni: e.target.value })}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Qualification/Degree</Field.Label>
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
        <Field.Label>Course of Study</Field.Label>

        <Input
          value={data.course}
          onChange={(e) => updateData({ course: e.target.value })}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Year of Graduatiom</Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            value={data.grad}
            onChange={(e) => updateData({ grad: e.target.value })}
            name=""
          >
            <For each={[" ", "2025", "2024", "2023","2022"]}>
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

      <Flex gap={70} mt={20}>
        <Button
          colorPalette="teal"
          w="200px"
          onClick={() => navigate("/register/step1")}
        >
          Previous
        </Button>
        <Button
          colorPalette="teal"
          w="200px"
          onClick={() => navigate("/register/step3")}
        >
          Next
        </Button>
      </Flex>
    </VStack>
  );
}
