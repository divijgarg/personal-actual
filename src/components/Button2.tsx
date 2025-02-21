import { Box, useBreakpointValue, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ButtonProps {
  name: string;
  color: string;
}
function Button2(props: ButtonProps) {
  const { name, color } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Flex
      borderRadius="lg"
      h="100%"
      bgColor={props.color}
      textAlign="center"
      textColor="white"
      justifyContent="center"
      boxShadow="md"
      minW="120px"
    >
      <Text
        whiteSpace="nowrap"
        ml="5%"
        mr="5%"
        fontSize="sm"
        display="flex"
        justifyContent="center"
      >
        {props.name}{" "}
      </Text>
    </Flex>
  );
}
export default Button2;
