import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  Select,
  Input,
} from "@chakra-ui/react";
import { useCallback } from "react";
import type { FormField } from "../../hooks/useJsonToForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CustomSwitch from "../switch/switch";
import React from "react";
import DropZone from "../dropzone/dropZone";
import { ChakraRadioGroup } from "../radioGroup/radioGroup";
import { Path, useController } from "react-hook-form";

export default function StyledField<T>(props: FormField<T>) {
  const [parent] = useAutoAnimate();
  const { field, fieldState } = useController<FormField<T>>({
    name: props.id.toString() as Path<FormField<T>>,
  });

  const error = fieldState.invalid;
  const touched: boolean = fieldState.isTouched;

  const inputComponent = useCallback(
    (props: FormField<T>) => {
      if (props.type === "select") {
        const { options } = props;
        return (
          <Select {...field} value={field.value as string}>
            {options.map((option) => (
              <option key={option.index} value={option.value}>
                {option.label || option.value}
              </option>
            ))}
          </Select>
        );
      }

      if (props.type === "radioGroup") {
        const { options } = props;
        return (
          <ChakraRadioGroup name={props.id.toString()} options={options} />
        );
      }

      if (props.type === "boolean") {
        return <CustomSwitch {...field} />;
      }

      if (props.type === "file") {
        return <DropZone {...field} />;
      }

      if (props.type === "textarea") {
        return <Textarea {...field} value={field.value as string} />;
      }

      if (props.type === "number") {
        return (
          <Input
            type={props.type}
            {...field}
            onChange={(e) => {
              field.onChange(Number(e.target.value));
            }}
            value={field.value as number}
          />
        );
      }

      return (
        <Input type={props.type} {...field} value={field.value as string} />
      );
    },
    [props.type, field]
  );

  return (
    <FormControl ref={parent} isInvalid={error && touched}>
      {props.label && (
        <FormLabel htmlFor={props.id as string}>{props.label}</FormLabel>
      )}

      {props.component || inputComponent(props)}

      <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
    </FormControl>
  );
}
