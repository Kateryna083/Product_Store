import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CiSquarePlus } from "react-icons/ci";

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
          // fontSize={{ base: "22", sm: "28" }}
          // fontWeight={"bold"}
          // textTransform={"uppercase"}
          // textAlign={"center"}
          // bgGradient={"linear(to-r, cyan.400, blur.500)"}
          // bgClip={"text"}
          color="white"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button leftIcon={<CiSquarePlus size="24px" color="pink.700" />}>
              Додати
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
