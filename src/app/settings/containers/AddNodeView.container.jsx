import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import AddNodeView from "../components/AddNodeView";
import SettingsContext from "../settings.context";
import { NODE_TYPES } from "../../../constants";
import { RiMessage3Line } from "react-icons/ri";

const newNodes = [
  {
    icon: <RiMessage3Line />,
    name: NODE_TYPES.MESSAGE,
  },
];

function AddNodeViewContainer() {
  const { addNode } = useContext(SettingsContext);

  const onSelectNode = (node) => {
    switch (node.name) {
      case NODE_TYPES.MESSAGE:
        const id = uuidv4();
        addNode({
          id,
          data: { label: "Send Message", id },
          position: { x: 100, y: 100 },
          type: "message",
        });
        break;

      default:
        break;
    }
  };

  return <AddNodeView onSelectNode={onSelectNode} newNodes={newNodes} />;
}

export default AddNodeViewContainer;
