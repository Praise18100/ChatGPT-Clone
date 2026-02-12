import {
  Box,
  Button,
  Circle,
  HStack,
  Menu,
  Portal,
  Stack,
  Text,

} from "@chakra-ui/react";
import { LuSparkles } from "react-icons/lu";
import { LuChevronDown,LuCheck, LuClock} from 'react-icons/lu';
import { SiOpenai } from "react-icons/si";
import { Switch } from "@chakra-ui/react";

interface MenuItemDetailProps {
  icon: React.ReactElement;
  title: string;
  description?: string;
  element: React.ReactElement;
}

function MenuItemDetail(props: MenuItemDetailProps) {
  const { icon, title, description, element, ...rest } = props;
  return (
    <HStack {...rest} gap="3" w="100%">
      <Circle size="8" bg="bg.muted">
        {icon}
      </Circle>
      <Stack gap="0" flex="1">
        <Text fontSize="sm" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="xs" color="fg.muted">
          {description}
        </Text>
      </Stack>
      <Box>{element}</Box>
    </HStack>
  );
}

export const ChatGPTMenu = () => {


  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost" fontSize="lg" fontWeight='bold' color='fg.muted'>
          ChatGPT <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW='320px' borderRadius='2xl'>
            <Menu.Item value='chatgpt-plus' py='2'>
              <MenuItemDetail
                title="ChatGPT Plus"
                icon={<LuSparkles />}
                description="Our smartest model and more"
                element={
                  <Button variant="outline" size="xs" borderRadius="full">
                    Upgrade
                  </Button>
                }
              />
            </Menu.Item>

            <Menu.Item value='chatgpt' py='2'>
              <MenuItemDetail
                title='ChatGPT'
                icon={<SiOpenai />}
                description='Great for everyday tasks'
                element={
                  <LuCheck fontSize='lg' />
                }
              />
            </Menu.Item>

            <Menu.Item value='temporary-chat' py='2'>
  <MenuItemDetail
    title="Temporary Chat"
    icon={<LuClock />}
    description="Our smartest model and more"
    element={
      <Switch.Root size='sm'>
        <Switch.Control />
      </Switch.Root>
    }
  />
</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
