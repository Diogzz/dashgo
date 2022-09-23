import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return(
    <>
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Diogo Cesar</Text>
        <Text color="gray.300" fontSize="small">
          d_cesarrodrigues@hotmail.com
        </Text>
      </Box>
    </Flex>
    <Avatar size="md" name="Diogo Cesar" src="http://github.com/diogzz.png"></Avatar>
  </>
  )
}