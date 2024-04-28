import React, { useCallback, useMemo, useState } from "react";

import Builder from "../components/Builder";
import SettingsContainer from "../../settings/containers/Settings.container";
import SettingsContext from "../../settings/settings.context";
import { ADD_NODE, MESSAGE_INPUT, NODE_TYPES } from "../../../constants";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import MessageNode from "../../nodes/components/MessageNode";
import SourceNode from "../../nodes/components/SourceNode";
import CustomEdge from "../components/CustomEdge";
import { Button } from "@mantine/core";

const edgeTypes = {
  "custom-edge": CustomEdge,
};

const initialNode = [
  {
    id: "source",
    data: { label: "Starting node" },
    position: { x: 0, y: 0 },
    type: "source",
  },
];

function BuilderContainer() {
  const [nodes, setNodes] = useState(initialNode);
  const [edges, setEdges] = useState([]);
  const [settingsType, setSettingsType] = useState(null);

  // context methods
  const handleSettingsType = (panel, data) => {
    if (!panel) {
      setSettingsType(null);
    } else if (panel && [MESSAGE_INPUT, ADD_NODE].includes(panel)) {
      setSettingsType({ panel, data });
    }
  };
  const updateMessage = (message, nodeId) => {
    const updatedNodes = nodes.map((node) => {
      if (node.id === nodeId) {
        node.data.message = message;
      }
      return node;
    });
    setNodes([...updatedNodes]);
    handleSettingsType(false);
  };
  const addNode = (node) => {
    setNodes([...nodes, node]);
    handleSettingsType(false);
  };
  const deleteNode = (id) => {
    setNodes([...nodes?.filter((n) => n.id !== id)]);
  };

  // builder methods
  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => {
      return applyNodeChanges(changes, nds);
    });
  }, []);
  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);
  const onConnect = useCallback((params) => {
    return setEdges((eds) => {
      for (let i = 0; i < eds.length; i++) {
        console.log("second", params, eds[i].source);
        if (eds[i].source === params.source) {
          return eds;
        }
      }
      return addEdge({ ...params, type: "custom-edge" }, eds);
    });
  }, []);
  const onNodeClick = (event, node) => {
    handleSettingsType(MESSAGE_INPUT, node);
    // You can access node properties like its id, data, position, etc.
  };
  const nodeTypes = useMemo(
    () => ({ message: MessageNode, source: SourceNode }),
    []
  );

  // Save flow
  const onSave = () => {
    console.log(edges, nodes);
  };

  return (
    <SettingsContext.Provider
      value={{
        settingsType,
        handleSettingsType,
        addNode,
        deleteNode,
        updateMessage,
      }}
    >
      <Button onClick={onSave}>Save flow</Button>
      <Builder
        edges={edges}
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      />
      <SettingsContainer />
    </SettingsContext.Provider>
  );
}

export default BuilderContainer;
