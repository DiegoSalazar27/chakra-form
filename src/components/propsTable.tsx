import {
  Tr,
  Td,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
} from "@chakra-ui/react";

const propsTableHeader = ["Prop Name", "Description", "Type"];
const propsTableRows = [
  {
    prop: "buttonText",
    description: "Text of the submit button",
    type: "string",
  },
  {
    prop: "submitingButtonText",
    description: "Text to show while the promise gets resolved",
    type: "string",
  },
  {
    prop: "initialValues",
    description: "An Object containing the initial Values of the form",
    type: "T",
  },
  {
    prop: "jsonFormFields",
    description: "An Array of FormFields, this will render all the fields",
    type: "FormField<T>[]",
  },
  {
    prop: "handleSubmit",
    description: "Function to handle submit",
    type: "(data: T) => void | (data: T) => Promise<void>",
  },
  {
    prop: "schema",
    description: "Zod Schema to validate fields",
    type: "Zod Schema",
  },
];

export type PropsTableProps<T> = {
  rows: T[];
  header: string[];
};
export function PropsTable() {
  return (
    <TableContainer>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

        <Thead>
          <Tr>
            {propsTableHeader.map((v, i) => (
              <Th key={i}>{v}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {propsTableRows.map((v, i) => (
            <Tr key={i}>
              <Td>{v.prop}</Td>
              <Td>{v.description}</Td>
              <Td>{v.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
