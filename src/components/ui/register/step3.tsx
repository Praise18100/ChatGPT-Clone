import {
  VStack,
  Button,
  Heading,
  Flex,
  Textarea,
  Field,
  Input,
  Checkbox,
  FileUpload,
  Float,
  useFileUploadContext,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";
import { LuFileImage, LuX } from "react-icons/lu";

const FileUploadList = () => {
  const fileUpload = useFileUploadContext();
  const files = fileUpload.acceptedFiles;
  if (files.length === 0) return null;
  return (
    <FileUpload.ItemGroup>
      {files.map((file) => (
        <FileUpload.Item
          w="auto"
          boxSize="20"
          p="2"
          file={file}
          key={file.name}
        >
          <FileUpload.ItemPreviewImage />
          <Float placement="top-end">
            <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
              <LuX />
            </FileUpload.ItemDeleteTrigger>
          </Float>
        </FileUpload.Item>
      ))}
    </FileUpload.ItemGroup>
  );
};

export default function StepThree() {
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
        Step 3: Profile
      </Heading>

      <Field.Root pt="10%">
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px" pt="4%">
          Username
        </Field.Label>
        <Input
          placeholder="Username"
          value={data.username}
          onChange={(e) => updateData({ username: e.target.value })}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px" pt="4%">
          Password
        </Field.Label>
        <Input
          placeholder="Password"
          value={data.password}
          onChange={(e) => updateData({ password: e.target.value })}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px" pt="4%">
          Confirm Password
        </Field.Label>
        <Input
          placeholder="Confirm Password"
          value={data.conpassword}
          onChange={(e) => updateData({ conpassword: e.target.value })}
        />
      </Field.Root>

      <Checkbox.Root mb={5} mt={5} colorPalette="teal">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label fontWeight="bold" fontSize="sm">
          Remember Me
        </Checkbox.Label>
      </Checkbox.Root>

      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px" pt="4%">
          Bio
        </Field.Label>

        <Textarea
          placeholder="Tell us about yourself"
          value={data.bio}
          onChange={(e) => updateData({ bio: e.target.value })}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label fontWeight="bolder" fontSize="md" pb="3px" pt="4%">
          {" "}
          Profile Picture
        </Field.Label>

        <FileUpload.Root accept="image/*">
          <FileUpload.HiddenInput
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                const preview = URL.createObjectURL(file);

                updateData({
                  picture: file,
                  picturePreview: preview,
                });
              }
            }}
          />
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm" color="teal.700">
              <LuFileImage /> Upload Image
            </Button>
          </FileUpload.Trigger>

          <FileUploadList />
        </FileUpload.Root>
      </Field.Root>

      <Flex gap="2%" mt={10}>
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
          onClick={() => navigate("/register/summary")}
        >
          Next
        </Button>
      </Flex>
    </VStack>
  );
}
