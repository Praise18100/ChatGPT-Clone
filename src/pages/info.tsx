import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Box, Flex, Button, Stack, Text } from "@chakra-ui/react";

import Users from "../components/ui/info/users";
import Posts from "../components/ui/info/posts";

export default function Info() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const showNav = !!state?.userId;

  return (
    <Stack h="full" gap={0}>
      {showNav && (
        <Box bg="teal.600" px="6" py="4">
          <Flex align="center" justify="space-between">
            <Flex align="center" gap="3">
              <Flex
                w="10"
                h="10"
                borderRadius="full"
                bg="white"
                color="teal.600"
                align="center"
                justify="center"
                fontWeight="bold"
                fontSize="lg"
                flexShrink={0}
              >
                {state?.userName?.charAt(0)}
              </Flex>
              <Box>
                <Text color="white" fontWeight="bold" fontSize="md">
                  {state?.userName}
                </Text>
                <Text color="teal.100" fontSize="xs">
                  Viewing posts
                </Text>
              </Box>
            </Flex>

            <Button
              size="sm"
              bg="white"
              color="teal.600"
              borderRadius="full"
              px="4"
              _hover={{ bg: "teal.50" }}
              onClick={() => navigate("/info/users")}
            >
              
              All Users
            </Button>
          </Flex>
        </Box>
      )}

      <Box flex="1" overflowY="auto" bg="gray.50">
        <Routes>
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" element={<Users />} />
          <Route path="/posts/:postId" element={<Posts />} />
        </Routes>
      </Box>
    </Stack>
  );
}