import { Box, Flex, Stack } from "@chakra-ui/react";
import { SidebarProvider } from "./components/ui/sidebar-context";
import { Sidebar } from "./components/ui/sidebar";
import { TopSection } from "./components/ui/top-section";
import { MiddleSection } from "./components/ui/middle-section";
import { BottomSection } from "./components/ui/bottom-section";
import { Register } from "./pages/register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <SidebarProvider>
      <Flex minH="100dvh">
        <Sidebar />

        <Box flex="1">
          <Stack h="full">
            <TopSection />

            <Routes>
              <Route path="/" element={<MiddleSection />} />
              <Route path="/register/*" element={<Register />} />
            </Routes>

            <BottomSection />
          </Stack>
        </Box>
      </Flex>
    </SidebarProvider>
  );
}

export default App;
