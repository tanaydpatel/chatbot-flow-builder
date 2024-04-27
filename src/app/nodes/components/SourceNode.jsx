import { Card, Text } from "@mantine/core";
import React from "react";
import { Handle, Position } from "reactflow";
import NodeCard from "./NodeCard";

function SourceNode() {
  return (
    <>
      <NodeCard title="Starting node">
        <Text size="xs" fs="italic">
          This is starting node of the flow
        </Text>
      </NodeCard>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export default SourceNode;
