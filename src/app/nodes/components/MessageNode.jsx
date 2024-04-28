import React, { useContext } from "react";
import { Handle, Position } from "reactflow";

import NodeCard from "./NodeCard";
import { ActionIcon, Text, Tooltip } from "@mantine/core";
import SettingsContext from "../../settings/settings.context";
import { RiDeleteBin2Line } from "react-icons/ri";

function MessageNode({ data }) {
  const { deleteNode } = useContext(SettingsContext);

  return (
    <>
      <NodeCard title="Send message">
        <ActionIcon
          color="red"
          variant="transparent"
          pos="absolute"
          top={0}
          right={0}
          style={{ zIndex: 5 }}
          onClick={(e) => {
            e.stopPropagation();
            deleteNode(data?.id);
          }}
        >
          <RiDeleteBin2Line />
        </ActionIcon>
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
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export default MessageNode;
