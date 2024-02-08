import { Switch } from "@chakra-ui/react";
import { type ChangeEvent } from "react";
import React from "react";
import { useController } from "react-hook-form";

interface CustomSwitch {
  name: string;
}

export default function CustomSwitch(props: CustomSwitch) {
  const {
    field: { onChange, value },
  } = useController({ name: props.name });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.currentTarget.checked);
  }

  return <Switch isChecked={value} onChange={handleChange} />;
}