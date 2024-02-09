import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Text,
  Tooltip,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Form } from "./components/form";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex minW={"full"} justifyContent={"center"}>
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
    </Flex>
  );
}

export default App;
