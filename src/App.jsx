import React from "react";

import { AppShell, Group, Title, Flex, Box, Anchor } from "@mantine/core";
import BuilderContainer from "./app/builder/containers/Builder.container";
import { RiGithubFill, RiUser3Line } from "react-icons/ri";

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
            <div>
              <Anchor
                mr="lg"
                target="_blank"
                href="https://github.com/tanaydpatel/chatbot-flow-builder"
              >
                <RiGithubFill size="25px" />
              </Anchor>
              <Anchor
                mr="lg"
                target="_blank"
                href="https://www.tanaypatel.dev/"
              >
                <RiUser3Line size="25px" />
              </Anchor>
            </div>
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
