import { Avatar, Flex, IconButton } from "@chakra-ui/react";
import { LuPanelLeftClose, LuMessageSquarePlus } from "react-icons/lu";
import { Tooltip } from "./tooltip";
import { ChatGPTMenu } from "../../ChatGPTMenu";
import { useSidebarContext } from "./sidebar-context";
import { useNavigate } from "react-router-dom";

export function TopSection() {
  const navigate = useNavigate();
  const { sideBarVisible, toggleSidebar } = useSidebarContext();
  return (
    <Flex justify="space-between" align="center" p="2">
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

      <Avatar.Root
        size="sm"
        colorPalette="teal"
        variant="solid"
        mr="3"
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
        onClick={() => navigate("/register")}
      >
        <Avatar.Fallback name="Praise" />
      </Avatar.Root>
    </Flex>
  );
}
