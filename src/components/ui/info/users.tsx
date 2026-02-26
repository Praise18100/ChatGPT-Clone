import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Stack, Spinner, Center, Badge } from "@chakra-ui/react";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user: any) => {
  navigate(`/info/posts/${user.id}`);
};
  if (loading)
    return (
      <Center h="60vh">
        <Spinner size="xl" color="teal.500" borderWidth="3px" />
      </Center>
    );

  return (
    <Box p="6" maxW="700px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" color="teal.600" mb="1">
        All Users
      </Text>
      <Text color="gray.500" fontSize="sm" mb="6">
        Select a user to view their posts
      </Text>

      <Stack gap="3">
        {users.map((user, index) => (
          <Box
            key={user.id}
            onClick={() => handleUserClick(user)}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="xl"
            p="4"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
              borderColor: "teal.400",
              shadow: "md",
            }}
          >
            <Flex align="center" gap="4">
              <Flex
                w="12"
                h="12"
                borderRadius="full"
                bg="teal.50"
                color="teal.600"
                align="center"
                justify="center"
                fontWeight="bold"
                fontSize="lg"
                borderWidth="2px"
                borderColor="teal.200"
              >
                {user.name.charAt(0)}
              </Flex>

              <Box flex="1">
                <Flex align="center" gap="2" mb="1">
                  <Text fontWeight="semibold" color="gray.800">
                    {user.name}
                  </Text>
                  <Badge colorPalette="teal" size="sm" borderRadius="full">
                    @{user.username}
                  </Badge>
                </Flex>
                <Text fontSize="sm" color="gray.500">{user.email}</Text>
                <Text fontSize="xs" color="gray.400">
                  {user.company?.name} · {user.address?.city}
                </Text>
              </Box>

              <Text color="gray.300" fontWeight="bold" fontSize="lg">
                {String(index + 1)}
              </Text>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}