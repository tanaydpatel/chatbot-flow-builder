import { Card, Text } from "@mantine/core";
import React from "react";

function NodeCard({ title, children }) {
  return (
    <Card withBorder shadow="xs" miw={200} maw={300} pos="relative">
      <Card.Section bg="lime" px="lg" py="4px">
        <Text size="xs" fw="600">
          {title}
        </Text>
      </Card.Section>
      <Card.Section p="xs">{children}</Card.Section>
    </Card>
  );
}

export default NodeCard;
