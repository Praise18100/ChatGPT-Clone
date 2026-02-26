"use client";
import {
  VStack,
  Button,
  Heading,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../form-context";
import { Checkbox } from "@chakra-ui/react";

export default function Summary() {
  const { data } = useRegister();
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
        Registration Complete
      </Heading>

      <SimpleGrid gap={3} w="100%" pt="10%">
        <Flex display="">
          <Text fontWeight="bold">Profile Picture</Text>
        {data.picturePreview && (
          <img
            src={data.picturePreview}
            alt="Profile"
            width={120}
            style={{ borderRadius: "50%" }}
          />
        )}

        <Text fontWeight="bold" >First Name</Text>
        <Text>{data.firstName}</Text>

        <Text fontWeight="bold">Last Name</Text>
        <Text>{data.lastName}</Text>

        <Text fontWeight="bold">Gender</Text>
        <Text>{data.gender}</Text>

        <Text fontWeight="bold">Email</Text>
        <Text>{data.email}</Text>

        <Text fontWeight="bold">Username</Text>
        <Text>{data.username}</Text>

        <Text fontWeight="bold">Password</Text>
        <Text>***</Text>
        <Text fontWeight="bold">Confirm Password</Text>
        <Text>***</Text>

        <Text fontWeight="bold">University/College</Text>
        <Text>{data.uni}</Text>

        <Text fontWeight="bold">Qualification/Degree</Text>
        <Text>{data.degree}</Text>

        <Text fontWeight="bold">Course of Study </Text>
        <Text>{data.course}</Text>

        <Text fontWeight="bold">Year of Graduation</Text>
        <Text>{data.grad}</Text>

        <Text fontWeight="bold">Bio</Text>
        <Text>{data.bio}</Text>
        </Flex>
      </SimpleGrid>

      <Checkbox.Root mb={5} mt={5} colorPalette="teal">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      </Checkbox.Root>

      <Flex gap="2%" ml={0}>
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
          onClick={() => navigate("../../")}
        >
          Submit
        </Button>
      </Flex>
    </VStack>
  );
}
