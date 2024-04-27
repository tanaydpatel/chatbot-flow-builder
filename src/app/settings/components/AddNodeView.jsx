import { ActionIcon, Grid, Text } from "@mantine/core";
import React from "react";

function AddNodeView({ onSelectNode, newNodes }) {
  return (
    <Grid p="lg">
      {newNodes.map((node) => (
        <Grid.Col span={4} ta="center">
          <ActionIcon
            variant="light"
            size="xl"
            mb="xs"
            onClick={() => {
              onSelectNode(node);
            }}
          >
            {node.icon}
          </ActionIcon>
          <Text size="xs" tt="capitalize">
            {node.name}
          </Text>{" "}
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default AddNodeView;
