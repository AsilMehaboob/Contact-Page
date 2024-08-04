// Footer.tsx
import React from 'react';
import { Box, Text, Link, Stack } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" role="contentinfo" py={3} px={6} bg="#2C2D30" color="white">
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="space-between" align="center">
        <Text fontSize="xs">© {new Date().getFullYear()} </Text>
        <Stack direction="row" spacing={6}>
          <Link href="https://opensource.org/license/apache-2-0" isExternal>
            <Text fontSize="xs">Apache License 2.0</Text>
          </Link>
          
        </Stack>
      </Stack>
     
    </Box>
  );
};

export default Footer;
