import { Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW={"1140px"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ baze: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blur.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
