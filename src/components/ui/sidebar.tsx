import {
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { Tooltip } from "./tooltip";
import {
  LuPanelLeftClose,
  LuMessageSquarePlus,
  LuCompass,
  LuSparkles,
} from "react-icons/lu";
import { SiOpenai } from "react-icons/si";
import { useSidebarContext } from './sidebar-context'


export function Sidebar() {
 const {sideBarVisible,toggleSidebar} = useSidebarContext();
  return (
    <Box
      bg="bg.muted"
      w={!sideBarVisible ? "0" : "260px"}
      overflow="hidden"
      transition="width 0.3s"
    >
      <Stack h="full" px="3" py="2">
        <Flex justify="space-between">
          <Tooltip
            content="Close sidebar"
            positioning={{ placement: "right" }}
            showArrow
          >
            <IconButton
              variant="ghost"
              aria-label="Menu"
              onClick={toggleSidebar}
            >
              <LuPanelLeftClose fontSize="2xl" color="fg.muted" />
            </IconButton>
          </Tooltip>

          <Tooltip content="New chat" showArrow>
            <IconButton variant="ghost" aria-label="New chat">
              <LuMessageSquarePlus fontSize="2xl" color="fg.muted" />
            </IconButton>
          </Tooltip>
        </Flex>
        <Stack px="2" gap="0" flex="1">
          <HStack
            position="relative"
            className="group"
            _hover={{
              layerStyle: "fill.muted",
              textDecor: "none",
            }}
            px="1"
            h="10"
            borderRadius="lg"
            w="full"
            whiteSpace="nowrap"
          >
            <Link href="#" variant="plain" _hover={{ textDecor: "none" }}>
              <Circle size="6" bg="bg" borderWidth="1px">
                <SiOpenai fontSize="md" />
              </Circle>
              <Text fontSize="sm" color={"grey"} fontWeight="md">
                ChatGPT
              </Text>
            </Link>
            <AbsoluteCenter
              axis="vertical"
              right="2"
              display="none"
              _groupHover={{ display: "initial" }}
            >
              <Tooltip content="New chat">
                <Box _hover={{ color: "fg.muted" }} cursor="pointer">
                  <LuMessageSquarePlus fontSize="md" color="fg.subtle" />
                </Box>
              </Tooltip>
            </AbsoluteCenter>
          </HStack>

          <HStack
            _hover={{
              layerStyle: "fill.muted",
              textDecor: "none",
            }}
            px="1"
            h="10"
            borderRadius="lg"
            w="100%"
            whiteSpace="nowrap"
          >
            <Link href="#" variant="plain" _hover={{ textDecor: "none" }}>
              <LuCompass fontSize="md" />
              <Text fontSize="sm" fontWeight="md">
                Explore GPTs
              </Text>
            </Link>
          </HStack>
        </Stack>
        <Link
          href="#"
          _hover={{ textDecor: "none", layerStyle: "fill.muted" }}
          py="2"
          borderRadius="lg"
          px="2"
        >
          <HStack whiteSpace="nowrap">
            <Circle size="8" fontSize="lg" borderWidth="1px">
              <LuSparkles />
            </Circle>
            <Stack gap="0" fontWeight="medium">
              <Text fontSize="sm">Upgrade Plan</Text>
              <Text fontSize="xs" color="fg.subtle">
                More access to the best models
              </Text>
            </Stack>
          </HStack>
        </Link>
      </Stack>
    </Box>
  );
}