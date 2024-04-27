import React from "react";
import { Handle, Position } from "reactflow";
import NodeCard from "./NodeCard";
import { Text, Tooltip } from "@mantine/core";

function MessageNode({ data }) {
  return (
    <>
      <NodeCard title="Send message">
        <Tooltip
          label={data?.message || null}
          multiline
          disabled={!data?.message}
        >
          {data?.message ? (
            <Text
              size="xs"
              style={{
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": "5",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data?.message}
            </Text>
          ) : (
            <Text size="xs" c="dimmed" fs="italic">
              Click here to type message
            </Text>
          )}
        </Tooltip>
      </NodeCard>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export default MessageNode;
