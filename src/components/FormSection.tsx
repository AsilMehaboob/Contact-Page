import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Flex,
  useColorMode,
  Text,
  useToast,
} from '@chakra-ui/react';

const FormSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhone(numericValue);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= 200) {
      setMessage(value);
      setMessageCount(value.length);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    try {
      const response = await fetch('https://formspree.io/f/movavoga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Message sent.',
          description: 'Thank you for your message. We will get back to you soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        event.target.reset();
        setMessage('');
        setMessageCount(0);
      } else {
        toast({
          title: 'Submission failed.',
          description: 'There was a problem submitting your form.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Submission failed.',
        description: 'There was a problem submitting your form.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      id="contact"
      flex="1"
      maxW="2xl"
      mx="auto"
      p={8}
      mb={{ base: 12, md: 0 }}
    >
      <Heading as="h2" size="lg" mb={6}>Get in Touch.</Heading>
      <Text color="grey" size="xs">Got a question or need help? Complete the form below, and we'll respond to you as quickly as we can.</Text><br/>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" mb={4}>
          <Flex>
            <FormControl id="firstName" mr={2} isRequired>
              <FormLabel>First Name</FormLabel>
              <Input name="firstName" placeholder="Enter your first name" required />
            </FormControl>
            <FormControl id="lastName" ml={2} isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input name="lastName" placeholder="Enter your last name" required />
            </FormControl>
          </Flex>
          <FormControl id="email" mt={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" placeholder="Enter your email" required />
          </FormControl>
          <FormControl id="phone" mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </FormControl>
          <FormControl id="message" mt={4} isRequired position="relative">
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              resize="none"
              placeholder="Enter your message"
              rows={5}
              value={message}
              onChange={handleMessageChange}
              required
            />
            <Text
              position="absolute"
              bottom="8px"
              right="8px"
              color="gray.500"
              fontSize="sm"
            >
              {messageCount}/200
            </Text>
          </FormControl>
        </Flex>
        <Button
          textColor={colorMode === 'dark' ? 'black' : 'white'}
          type="submit"
          width="full"
          mt={4}
          bg={colorMode === 'dark' ? 'gray' : 'black'}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormSection;
