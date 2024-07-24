// NavBar.tsx
import React from 'react';
import {
  Box,
  Heading,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ToggleColorModeButton from './ToggleColorModeButton';

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" py={4} px={6} borderBottomWidth={1}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="sm">Contact Us</Heading>
        <Flex display={{ base: 'none', md: 'flex' }} flex="1" justifyContent="center">
          <HStack spacing={12}>
            <Link href="#"><Text fontSize="sm">Home</Text></Link>
            <Link href="#"><Text fontSize="sm">About</Text></Link>
            <Link href="#contact"><Text fontSize="sm">Contact</Text></Link>
          </HStack>
        </Flex>
        <Flex alignItems="center">
          <ToggleColorModeButton />
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            ml={2}
          />
        </Flex>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column">
                <Link href="#" mb={4}><Text fontSize="lg">Home</Text></Link>
                <Link href="#" mb={4}><Text fontSize="lg">About</Text></Link>
                <Link href="#contact" mb={4}><Text fontSize="lg">Contact</Text></Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavBar;
