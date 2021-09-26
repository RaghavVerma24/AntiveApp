import { ChakraProvider, Flex, Text, IconButton } from "@chakra-ui/react";
import "../globals.css";
import OfficialNavChakra from "../OfficialNavChakra";

function ChakraNavPage({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex w="100%">
        <OfficialNavChakra />
      </Flex>
    </ChakraProvider>
  );
}

export default ChakraNavPage;
