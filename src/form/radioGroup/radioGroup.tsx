import {
  useRadio,
  useRadioGroup,
  HStack,
  Box,
  UseRadioGroupReturn,
} from "@chakra-ui/react";
import React from "react";
import { useController } from "react-hook-form";
import { SelectValues } from "../../hooks/useJsonToForm";

function RadioCard(props: ReturnType<UseRadioGroupReturn["getRadioProps"]>) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderRadius="lg"
        borderColor={"primary.400"}
        boxShadow="md"
        bg={"white"}
        _checked={{
          bg: "primary.400",
          color: "white",
          borderColor: "primary.400",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function ChakraRadioGroup({
  options,
  name,
}: {
  options: SelectValues[];
  name: string;
}) {
  const {
    field: { onChange, value },
  } = useController({ name: name });
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    value: value,
    onChange: (value) => {
      onChange(value);
    },
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value: value.value });
        return (
          <RadioCard key={value.index} {...radio}>
            {value.label}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
