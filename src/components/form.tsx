import { z } from "zod";
import { GenericFormWrapper } from "@diegosalazar27/chakraform";
import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";

const schema = z.object({
  text: z.string(),
  date: z.string(),
  select: z.string(),
  radioGroup: z.string(),
  switch: z.boolean(),
});

export function Form() {
  const [result, setResult] = useState<z.infer<typeof schema>>();

  function handleSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    setResult(data);
  }

  return (
    <HStack spacing={4} maxW={"container.lg"}>
      <GenericFormWrapper
        buttonText="Submit"
        handleSubmit={handleSubmit}
        initialValues={{
          text: "",
          date: new Date().toISOString().split("T")[0],
          select: "1",
          radioGroup: "1",
          switch: true,
        }}
        jsonFormFields={[
          {
            id: "text",
            type: "text",
            label: "Name",
            placeholder: "Jhon",
          },
          {
            id: "date",
            type: "date",
            label: "Date",
          },
          {
            id: "select",
            type: "select",
            label: "Select",
            options: [
              {
                index: 0,
                label: "0",
                value: "0",
              },
              {
                index: 1,
                label: "1",
                value: "1",
              },
              {
                index: 2,
                label: "2",
                value: "2",
              },
            ],
          },
          {
            id: "radioGroup",
            type: "radioGroup",
            label: "Radio Group",
            options: [
              {
                index: 0,
                label: "0",
                value: "0",
              },
              {
                index: 1,
                label: "1",
                value: "1",
              },
              {
                index: 2,
                label: "2",
                value: "2",
              },
            ],
          },
          {
            id: "switch",
            type: "boolean",
            label: "Switch",
          },
        ]}
        submitingButtonText="Submitting"
        schema={schema}
      />
      <Box maxW={"400px"}>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </Box>
    </HStack>
  );
}
