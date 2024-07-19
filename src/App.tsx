import React from 'react';
import { Box, useColorModeValue, ColorModeProvider } from '@chakra-ui/react';
import NavBar from './components/Navbar';
import FormSection from './components/FormSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const bgColor = useColorModeValue('#F1F1F1', '#1A1B1E');

  return (
   

        <Box minH="100vh" bg={bgColor}>
          <NavBar />
          <Box as="main" py={12} px={6}>
            <Box display={{ base: 'block', md: 'flex' }} justifyContent="space-between">
              <FormSection />
              <MapSection />
            </Box>
          </Box>
          <Footer/>
        </Box>


  );
};

export default App;
