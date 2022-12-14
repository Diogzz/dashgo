import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  return (
    <Flex
      width="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      // mt="4"
      align="center"
      px="6"
    >

      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <Notification />
        <Profile />
      </Flex>
    </Flex>
  )
}