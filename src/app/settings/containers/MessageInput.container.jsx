import React, { useContext, useState } from "react";
import MessageInput from "../components/MessageInput";
import SettingsContext from "../settings.context";

function MessageInputContainer() {
  const { updateMessage, settingsType } = useContext(SettingsContext);
  const [value, setValue] = useState("");

  const onSave = () => {
    updateMessage(value, settingsType?.data?.id);
  };

  return <MessageInput value={value} setValue={setValue} onSave={onSave} />;
}

export default MessageInputContainer;
