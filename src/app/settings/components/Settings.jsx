import React from "react";
import { Drawer } from "@mantine/core";

import { ADD_NODE, MESSAGE_INPUT } from "../../../constants";
import AddNodeViewContainer from "../containers/AddNodeView.container";
import MessageInputContainer from "../containers/MessageInput.container";

function Settings({ opened, onClose }) {
  return (
    <Drawer opened={opened} onClose={onClose} title={opened} position="right">
      {opened === ADD_NODE && <AddNodeViewContainer />}
      {opened === MESSAGE_INPUT && <MessageInputContainer />}
    </Drawer>
  );
}

export default Settings;
