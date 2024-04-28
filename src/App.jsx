import React from "react";

import { AppShell, Group, Title, Flex, Box } from "@mantine/core";
import BuilderContainer from "./app/builder/containers/Builder.container";

function App() {
  return (
    <AppShell header={{ height: { base: 70 } }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Flex
            justify="space-between"
            w={{ xs: "auto", sm: "100%" }}
            align="center"
          >
            <Title order={1} size={28} c="lime">
              {" "}
              Chatbot flow builder
            </Title>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Box h={"80vh"} w={"100%"} pos="relative">
          <BuilderContainer />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
