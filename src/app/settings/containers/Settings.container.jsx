import React, { useContext } from "react";

import Settings from "../components/Settings";
import SettingsContext from "../settings.context";

function SettingsContainer() {
  const { settingsType, handleSettingsType } = useContext(SettingsContext);

  const onClose = () => {
    handleSettingsType(false);
  };

  return <Settings opened={settingsType?.panel || null} onClose={onClose} />;
}

export default SettingsContainer;
