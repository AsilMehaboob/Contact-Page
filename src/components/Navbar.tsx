// NavBar.tsx
import React from 'react';
import { Box, Heading, Flex, Button, HStack, Link, Text } from '@chakra-ui/react';
import ToggleColorModeButton from './ToggleColorModeButton';

const NavBar: React.FC = () => {
  return (
    <Box as="header" py={4} px={6} borderBottomWidth={1}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="sm">CommBase</Heading>
        <Flex flex="1" justifyContent="center">
          <HStack spacing={12}>
            <Link href="#"><Text fontSize="sm">Home</Text></Link>
            <Link href="#"><Text fontSize="sm">About</Text></Link>
            <Link href="#contact"><Text fontSize="sm">Contact</Text></Link>
          </HStack>
        </Flex>
        <ToggleColorModeButton />
      </Flex>
    </Box>
  );
};

export default NavBar;
