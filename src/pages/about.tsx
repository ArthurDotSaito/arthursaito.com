import { Box } from '@/layout/ChakraUI';

export default function About() {
  return (
    <>
      <Box
        height={{ base: 'auto', md: '6rem' }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius="lg"
        mb={10}
        p={3}
        textAlign="center"
        bg={'whiteAlpha.200'}
        color={'white'}
        fontSize={{ base: 'auto', md: '1.7rem' }}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Esse é meu site
      </Box>
    </>
  );
}
