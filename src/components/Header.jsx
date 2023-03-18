import { Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Heading as="h4" size="md" color="blue">
        MyCryptoApp
      </Heading>
      <Button
        variant={"unstyled"}
        color={"white"}
        _hover={{ color: "darkgrey" }}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        _hover={{ color: "darkgrey" }}
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        _hover={{ color: "darkgrey" }}
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
}

export default Header;
