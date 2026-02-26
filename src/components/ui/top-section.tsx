import { Avatar, Flex, IconButton, Button } from "@chakra-ui/react";
import { LuPanelLeftClose, LuMessageSquarePlus } from "react-icons/lu";
import { Tooltip } from "./tooltip";
import { ChatGPTMenu } from "../../ChatGPTMenu";
import { useSidebarContext } from "./sidebar-context";
import { useLocation, useNavigate } from "react-router-dom";

export function TopSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { sideBarVisible, toggleSidebar } = useSidebarContext();
  return (
    <Flex justify="space-between" align="center" p="3">
      {!sideBarVisible && (
        <Flex>
          <Tooltip
            content="New chat"
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
          <ChatGPTMenu />
        </Flex>
      )}
      {sideBarVisible && <ChatGPTMenu />}

      {location.pathname === "/" && (
      <Avatar.Root
        size="sm"
          mr="3"
          color="white"
          bg="teal.600"
          cursor="pointer"
          borderRadius="full"
          px="4"
        _hover={{ opacity: 0.8 }}
        onClick={() => navigate("/info")}
      >
        <Avatar.Fallback name="Praise" />
      </Avatar.Root>
      )}

       {location.pathname === "/info/users" && (
        <Button size="sm"
          mr="3"
          color="white"
          bg="teal.600"
          cursor="pointer"
          borderRadius="full"
          px="4"
        _hover={{ opacity: 0.8 }}
        onClick={() => navigate("/register")}>
          Register
        </Button>
      )}

      {location.pathname === "/register/step1" && (
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
  );
}
