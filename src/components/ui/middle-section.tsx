import { useState } from "react";
import {
  Center,
  HStack,
  IconButton,
  VStack,
  Heading,
  Input,
  InputGroup,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FileUpload } from "@chakra-ui/react";
import { LuArrowUp } from "react-icons/lu";
import { LuPaperclip } from "react-icons/lu";
import { LuImage } from "react-icons/lu";

interface PropmtButtonProps {
  icon?: React.ReactElement;
  description: String;
}
function PromptButton(props: PropmtButtonProps) {
  const { icon, description } = props;
  return (
    <Button variant="outline" borderRadius="full">
      {icon}
      <span color="fg.subtle">{description}</span>
    </Button>
  );
}

export function MiddleSection() {
   const [inputValue, setInputValue] = useState("");
  
      const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  return (
    <Center flex="1">
                <VStack gap="6">
                  <Heading size="3xl">What can I help you with?</Heading>
                  <Center>
                    <InputGroup
                      minW="768px"
                      startElement={
                        <FileUpload.Root>
                          <FileUpload.HiddenInput />
                          <FileUpload.Trigger asChild>
                            <LuPaperclip fontSize="2xl" color="fg" />
                          </FileUpload.Trigger>
                          <FileUpload.List />
                        </FileUpload.Root>
                      }
                      endElement={
                        <IconButton
                          fontSize="2xl"
                          size="sm"
                          borderRadius="full"
                          disabled={inputValue.trim() === ""}
                        >
                          <LuArrowUp fontSize="2xl" />
                        </IconButton>
                      }
                    >
                      <Input
                        placeholder="Message ChatGPT"
                        variant="subtle"
                        size="lg"
                        borderRadius="3xl"
                        value={inputValue}
                        onChange={handleInputValue}
                      />
                    </InputGroup>
                  </Center>
    
                  <HStack gap="2">
                    <PromptButton
                      icon={<Icon color="green.500"><LuImage fontSize="lg" /></Icon>}
                      description="Create image"
                    />
                    <PromptButton
                      icon={<Icon color="blue.500"><LuImage fontSize="lg" /></Icon>}
                      description="Code"
                    />
                    <PromptButton
                      icon={<Icon color="cyan.500"><LuImage fontSize="lg" /></Icon>}
                      description="Analyze data"
                    />
                    <PromptButton
                       icon={<Icon color="cyan.500"><LuImage fontSize="lg" /></Icon>}
                      description="Surprise"
                    />
                    <PromptButton description="More" />
                  </HStack>
                </VStack>
              </Center>
    
  );
}