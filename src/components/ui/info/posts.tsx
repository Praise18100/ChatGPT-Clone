import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Stack,
  Spinner,
  Center,
  Button,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { LuMessageSquare, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useParams, useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Posts() {
  const { postId } = useParams();
  const { userName } = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<{ [key: number]: Comment[] }>({});
  const [openComments, setOpenComments] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [postId]);

  const toggleComments = async (postId: number) => {
    if (comments[postId]) {
      setOpenComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
      return;
    }
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    );
    const data = await res.json();
    setComments((prev) => ({ ...prev, [postId]: data }));
    setOpenComments((prev) => ({ ...prev, [postId]: true }));
  };

  if (loading)
    return (
      <Center h="60vh">
        <Spinner size="xl" color="teal.500" borderWidth="3px" />
      </Center>
    );

  return (
    <Box p="6" maxW="750px" mx="auto">
     <Flex justifyContent="flex-end">
       {location.pathname === `/info/posts/${postId}` && (
        <Button
          size="sm"
          mr="3"
          color="white"
          bg="teal.600"
          cursor="pointer"
          borderRadius="full"
          px="4"
          _hover={{ opacity: 0.8 }}
          onClick={() => navigate("/info/users")}
        >
          All Users
        </Button>
      )}
     </Flex>
      <Text fontSize="2xl" fontWeight="bold" color="teal.600">
        Posts
      </Text>
      <Text color="gray.500" fontSize="sm" mb="6">
        {posts.length} posts by {userName}
      </Text>

      <Stack gap="5">
        {posts.map((post) => (
          <Box
            key={post.id}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="xl"
            p="5"
            _hover={{ borderColor: "teal.200", shadow: "sm" }}
          >
            <Text
              fontWeight="bold"
              color="gray.800"
              fontSize="md"
              mb="2"
              textTransform="capitalize"
            >
              {post.title}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {post.body}
            </Text>

            <Button
              size="sm"
              mt="4"
              variant="ghost"
              color="teal.500"
              _hover={{ bg: "teal.50" }}
              onClick={() => toggleComments(post.id)}
            >
              <Flex align="center" gap="2">
                <LuMessageSquare />
                <Text fontSize="sm">
                  {openComments[post.id] ? "Hide" : "Show"} Comments
                </Text>
                {openComments[post.id] ? <LuChevronUp /> : <LuChevronDown />}
              </Flex>
            </Button>

            {openComments[post.id] && (
              <Stack gap="3" mt="4">
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="teal.500"
                  textTransform="uppercase"
                >
                  {comments[post.id]?.length} Comments
                </Text>
                {comments[post.id]?.map((comment) => (
                  <Box key={comment.id} bg="teal.50" p="3">
                    <Flex align="center" gap="2" mb="1">
                      <Flex
                        w="6"
                        h="6"
                        borderRadius="full"
                        bg="teal.400"
                        color="white"
                        align="center"
                        justify="center"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        {comment.name.charAt(0).toUpperCase()}
                      </Flex>
                      <Text
                        fontWeight="semibold"
                        fontSize="sm"
                        color="teal.700"
                        textTransform="capitalize"
                      >
                        {comment.name}
                      </Text>
                      <Badge
                        colorPalette="teal"
                        size="sm"
                        textTransform="lowercase"
                      >
                        {comment.email}
                      </Badge>
                    </Flex>
                    <Text fontSize="sm" color="gray.600" mt="1">
                      {comment.body}
                    </Text>
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
