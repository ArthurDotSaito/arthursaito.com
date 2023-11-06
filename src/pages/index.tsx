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
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={'whiteAlpha.200'}
        color={'white'}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello,
        <TypewriterComponent
          options={{
            strings: ["I'm Arthur Saito", "I'm a engineer", "I'm a developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>
      <Box display={{ md: 'flex' }}>
        <Avatar src="/static/arthur.jpeg"></Avatar>
      </Box>
    </>
  );
}
