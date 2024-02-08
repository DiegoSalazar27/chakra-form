import { VStack, Button } from "@chakra-ui/react";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { DefaultValues } from "react-hook-form/dist/types";
import { ZodType, ZodTypeDef } from "zod";
import useJsonToForm, { FormField } from "../../hooks/useJsonToForm";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormWrapperParams<T> {
  initialValues: T;
  handleSubmit: (data: T) => any;
  jsonFormFields: FormField<T>[];
  schema: ZodType<unknown, ZodTypeDef, unknown>;
  buttonText: string;
  submitingButtonText: string;
}

function GenericFormWrapper<T extends FieldValues>({
  initialValues,
  handleSubmit,
  jsonFormFields,
  schema,
  buttonText,
  submitingButtonText,
}: FormWrapperParams<T>) {
  const methods = useForm<T>({
    defaultValues: initialValues as DefaultValues<T>,
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { formFields } = useJsonToForm<T>({
    params: { json: jsonFormFields },
  });

  return (
    <FormProvider {...methods}>
      <VStack
        as={"form"}
        onSubmit={methods.handleSubmit(handleSubmit)}
        spacing={4}
        alignItems="center"
      >
        {formFields}
        <Button
          type="submit"
          disabled={methods.formState.isSubmitting}
          isLoading={methods.formState.isSubmitting}
          loadingText={submitingButtonText}
        >
          {buttonText}
        </Button>
      </VStack>
    </FormProvider>
  );
}

export default GenericFormWrapper;
