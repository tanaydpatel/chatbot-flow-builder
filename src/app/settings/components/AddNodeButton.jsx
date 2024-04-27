import React, { useContext } from "react";

import { ActionIcon, Tooltip } from "@mantine/core";
import { RiAddBoxFill } from "react-icons/ri";
import SettingsContext from "../settings.context";
import { ADD_NODE } from "../../../constants";

function AddNodeButton() {
  const { handleSettingsType } = useContext(SettingsContext);

  const openSettings = () => {
    handleSettingsType(ADD_NODE);
  };

  return (
    <Tooltip label="Add new node">
      <ActionIcon
        onClick={openSettings}
        pos="absolute"
        size="lg"
        right="30px"
        top="10px"
        style={{ zIndex: 1 }}
      >
        <RiAddBoxFill />
      </ActionIcon>
    </Tooltip>
  );
}

export default AddNodeButton;
