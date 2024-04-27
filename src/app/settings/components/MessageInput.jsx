import { Button, Text, Textarea } from "@mantine/core";
import React from "react";
import { RiSave2Line } from "react-icons/ri";

function MessageInput({ value, setValue, onSave }) {
  return (
    <>
      <Text size="sm" fw="600" mb="lg">
        Enter message below.
      </Text>
      <Textarea
        autosize
        minRows={5}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button
        mt="lg"
        variant="outline"
        onClick={onSave}
        leftSection={<RiSave2Line />}
      >
        Save
      </Button>
    </>
  );
}

export default MessageInput;
