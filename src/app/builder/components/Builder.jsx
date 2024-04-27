import React from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";

import AddNodeButton from "../../settings/components/AddNodeButton";

function Builder({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onNodeClick,
  onConnect,
  nodeTypes,
}) {
  return (
    <>
      <AddNodeButton />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodeDoubleClick={onNodeClick}
        onNodeClick={onNodeClick}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </>
  );
}

export default Builder;
