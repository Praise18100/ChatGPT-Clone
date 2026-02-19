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
import { LuFileImage, LuX } from "react-icons/lu"


const FileUploadList = () => {
  const fileUpload = useFileUploadContext()
  const files = fileUpload.acceptedFiles
  if (files.length === 0) return null
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
  )
}

export default function StepThree() {
  const { data, updateData } = useRegister();
  const navigate = useNavigate();
  return (
    <VStack w="500px" maxW="1000px" mx="auto" gap={0} mt={20}>
      <Heading size="md">Step 3: Profile</Heading>

      <Field.Root>
        <Field.Label>Username</Field.Label>
        <Input
          placeholder="Username"
          value={data.username}
          onChange={(e) => updateData({ username: e.target.value })}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Input
          placeholder="Password"
          value={data.password}
          onChange={(e) => updateData({ password: e.target.value })}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>Confirm Password</Field.Label>
        <Input
          placeholder="Confirm Password"
          value={data.conpassword}
          onChange={(e) => updateData({ conpassword: e.target.value })}
        />
      </Field.Root>

      <Checkbox.Root mb={5} mt={5} colorPalette="teal">
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>Remember Me</Checkbox.Label>
              </Checkbox.Root>

      <Field.Root>
        <Field.Label>Bio</Field.Label>

        <Textarea
          placeholder="Tell us about yourself"
          value={data.bio}
          onChange={(e) => updateData({ bio: e.target.value })}
        />
      </Field.Root>

      
    <Field.Root>
  <Field.Label>Profile Picture</Field.Label>

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
      <Button variant="outline" size="sm">
        <LuFileImage /> Upload Image
      </Button>
    </FileUpload.Trigger>

    <FileUploadList />
  </FileUpload.Root>
</Field.Root>


      <Flex gap={70} mt={10}>
        <Button
          colorPalette="teal"
          w="200px"
          onClick={() => navigate("/register/step2")}
        >
          Previous
        </Button>
        <Button
          colorPalette="teal"
          w="200px"
          onClick={() => navigate("/register/summary")}
        >
          Next
        </Button>
      </Flex>
    </VStack>
  );
}
