import React from "react";

import { AppShell, Group, Burger, Title, Flex, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BuilderContainer from "./app/builder/containers/Builder.container";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: { base: 70 } }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex
            justify="space-between"
            w={{ xs: "auto", sm: "100%" }}
            align="center"
          >
            <Title order={1} size={28} c="teal">
              {" "}
              Chatbot flow builder
            </Title>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Box
          h={"80vh"}
          w={"100%"}
          style={{ border: "1px solid black" }}
          pos="relative"
        >
          <BuilderContainer />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
