import { AnimationContainer } from '@/components/Animation-Container';
import ThreeJsScene from '@/components/lib/ThreeScene';
import { Avatar, Box } from '@/layout/ChakraUI';
import TypewriterComponent from 'typewriter-effect';

export default function Index() {
  return (
    <>
      <AnimationContainer>
        <ThreeJsScene />
      </AnimationContainer>
      <Box
        height={'10rem'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius="lg"
        mb={10}
        p={3}
        textAlign="center"
        bg={'whiteAlpha.200'}
        color={'white'}
        fontSize={'2.5rem'}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello,
        <TypewriterComponent
          options={{
            strings: [" I'm Arthur Saito", " I'm a engineer", " I'm a developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box width={'20rem'} mr={45}>
          <Avatar src="/static/arthur.jpeg" size="full" loading="lazy"></Avatar>
        </Box>
        <Box>Arthur é legal</Box>
      </Box>
    </>
  );
}
