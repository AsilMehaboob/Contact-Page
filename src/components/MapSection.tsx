import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Icon,
  Text,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './MapSection.css';

const MapSection: React.FC = () => {
  const mapWidth = useBreakpointValue({ base: '100%', sm: '100%', md: '100%', lg: '100%' });
  const mapHeight = useBreakpointValue({ base: '250px', sm: '300px', md: '350px', lg: '400px' });

  return (
    <VStack
      flex="1"
      spacing={6}
      maxW={{ base: '90%', sm: '80%', md: '70%', lg: '60%' }}
      mx="auto"
      p={{ base: 4, sm: 6, md: 8 }}
    >
      <Box width="100%">
        <Heading as="h2" size="lg" mb={4}>
          Our Location
        </Heading>
        <Box className="map-container" borderRadius="md" overflow="hidden" mb={4} width="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8605577667586!2d76.32593747540994!3d10.02836369007849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006491601%3A0xcf23e14245d4694d!2sGovernment%20Model%20Engineering%20College!5e0!3m2!1sen!2sin!4v1721322756148!5m2!1sen!2sin"
            width={mapWidth}
            height={mapHeight}
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </Box>
      </Box>
      <Box width="100%">
        <Heading as="h2" size="lg" mb={4}>
          Contact Information
        </Heading>
        <VStack spacing={4} align="start">
          <HStack spacing={4}>
            <Icon as={FaMapMarkerAlt} />
            <Text>Govt Model Engineering College , Kochi</Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FaPhone} />
            <Text>+91 8129750227</Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FaEnvelope} />
            <Text>asilmehaboob@gmail.com</Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default MapSection;
