import { AnimationContainer } from '@/components/Animation-Container';
import ThreeJsScene from '@/components/lib/ThreeScene';
import { Avatar, Box } from '@/layout/ChakraUI';
import { chakra } from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';
import Image from 'next/image';

export default function Index() {
  const ProfileImage = chakra(Image, {
    shouldForwardProp: (prop: string) => ['width', 'height', 'src', 'alt'].includes(prop),
  });

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
        <Box>
          <ProfileImage src="/static/arthur.jpeg" alt="arthur-saito" width="300" height="300"></ProfileImage>
        </Box>
        <Box>Arthur é legal</Box>
      </Box>
    </>
  );
}
