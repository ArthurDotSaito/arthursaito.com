import { Button, Box, Container, Divider, Heading, Text } from '@/layout/ChakraUI';
import NextLink from 'next/link';

const NotFound = () => {
  return (
    <Container>
      <Heading>Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} alignItems="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
