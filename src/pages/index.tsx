import { Box, useColorModeValue } from '@/layout/ChakraUI';

export default function Index() {
  return (
    <>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={'whiteAlpha.200'}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I'm Arthur Saito
      </Box>
    </>
  );
}
