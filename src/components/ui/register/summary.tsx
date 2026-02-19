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
    <VStack w="500px" maxW="1000px" mx="auto" mt={10}>
      <Heading size="xl">Registration Complete</Heading>

      <SimpleGrid columns={2} gap={3} w="100%">
        <Text fontWeight="bold">Profile Picture</Text>
        {data.picturePreview && (
          <img
            src={data.picturePreview}
            alt="Profile"
            width={120}
            style={{ borderRadius: "50%" }}
          />
        )}

        <Text fontWeight="bold">First Name</Text>
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
      </SimpleGrid>

      <Checkbox.Root mb={5} mt={5} colorPalette="teal">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      </Checkbox.Root>

      <Flex gap={70} ml={0}>
        <Button
          colorPalette="teal"
          w="200px"
          onClick={() => navigate("/register/step3")}
        >
          Previous
        </Button>
        <Button
          colorPalette="teal"
          w="200px"
          onClick={() => navigate("../../")}
        >
          Submit
        </Button>
      </Flex>
    </VStack>
  );
}
