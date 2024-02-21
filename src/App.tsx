import {
  Box,
  HStack,
  Heading,
  IconButton,
  Text,
  Tooltip,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { PropsTable } from "./components/propsTable";
import { Form } from "./components/form";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <VStack pb={20} spacing={10} minW={"full"} justifyContent={"center"}>
      <VStack maxW={"container.sm"} py={10} spacing={10}>
        <HStack w={"full"} justifyContent={"space-between"}>
          <Box></Box>
          <Heading>Chakra Forms</Heading>
          <Tooltip label={`Toggle ${colorMode} Mode`}>
            <IconButton
              icon={colorMode === "dark" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={`Toggle ${colorMode} Mode`}
              size="sm"
              onClick={toggleColorMode}
            />
          </Tooltip>
        </HStack>
        <Text textAlign={"center"}>
          An utility to create forms using chakraUI and react-hook-forms using a
          json object, also supports zod schema for validation.
        </Text>
        <Form />
      </VStack>

      <VStack spacing={8} maxW={"400px"}>
        <Heading>FormField Interface</Heading>

        <Text>
          The main part of the solution is FormField type, this determines what
          input is going to be rendered
        </Text>
        {/* "text" | "password" | "email" | "checkbox" | "radio" | "date" | "number" | "boolean" | "dateRange" | "timerange" | "time" | "string" | "phone" | "textarea" | "file" | "monthPicker"; */}
        <pre>
          {`
            {
              id: string;
              type: string;
              label?: string;
              placeholder?: string;
              component?: JSX.Element;
              options: SelectValues[];
            }`}
        </pre>

        <Text>
          If "component" is passed it will render a custom component, if that's
          the case you need to manually handle the react-hook-form state
        </Text>
        <Text>Where Select values is an object with the following shape</Text>

        <pre>
          {`
          {
            label: string;
            value: string;
            index?: string | number;
          }`}
        </pre>
      </VStack>

      <VStack maxW={"2xl"} spacing={8}>
        <Heading>Generic Form Wrapper Props</Heading>
        <PropsTable />
      </VStack>
    </VStack>
  );
}

export default App;
