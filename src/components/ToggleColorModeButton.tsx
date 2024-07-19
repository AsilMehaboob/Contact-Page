import React from 'react';
import {  useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleColorModeButton: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);
  
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={icon}
      aria-label="Toggle color mode"
    />
  );
};

export default ToggleColorModeButton;
