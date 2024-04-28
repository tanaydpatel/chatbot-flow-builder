import { Divider, Text, Tooltip } from "@mantine/core";
import React from "react";
import { Handle, Position } from "reactflow";
import NodeCard from "./NodeCard";

function SourceNode({ data }) {
  return (
    <>
      <NodeCard title="Starting node">
        <Text size="xs" fs="italic">
          This is starting node of the flow
        </Text>
        <Divider mb="sm" />
        <Tooltip
          label={data?.message || null}
          multiline
          disabled={!data?.message}
          maw={500}
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
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export default SourceNode;
