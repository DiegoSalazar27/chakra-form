import React from "react";
import { useMemo } from "react";
import StyledField from "../form/styledField/styledField";

export interface JsonToFormParams<T> {
  json: FormField<T>[];
}

// export type FormFields<T> = {
//   fields: (FormField & FormKeys<T>)[];
//   initialValues: Required<T>;
// };

export type FormField<T> = {
  id: keyof T;
  label?: string;
  placeholder?: string;
  component?: JSX.Element;
} & (SelectProps | InputProps);

type InputType =
  | "text"
  | "password"
  | "email"
  | "checkbox"
  | "radio"
  | "date"
  | "number"
  | "boolean"
  | "dateRange"
  | "timerange"
  | "time"
  | "string"
  | "phone"
  | "textarea"
  | "file"
  | "monthPicker";

type InputProps = { type: InputType };

type SelectProps = {
  type: "select" | "multipleSelect" | "radioGroup";
  options: SelectValues[];
};

export interface SelectValues {
  label: string;
  value: string;
  index: string | number;
}

function useJsonToForm<T>({ params }: { params: JsonToFormParams<T> }) {
  const formFields = useMemo(
    () =>
      params.json.map((field) => (
        <StyledField
          key={field.id as string}
          {...field}
          // id={field.id as string}
        />
      )),
    [params.json]
  );

  return { formFields };
}

export default useJsonToForm;
