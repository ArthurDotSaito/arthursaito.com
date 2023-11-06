import { AnimationContainer } from '@/components/Animation-Container';
import { Paragraph } from '@/components/Paragraph';
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
        height={'6rem'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius="lg"
        mb={10}
        p={3}
        textAlign="center"
        bg={'whiteAlpha.200'}
        color={'white'}
        fontSize={'1.7rem'}
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
        <Box>
          <Paragraph style={{ maxWidth: '360px' }}>
            <strong>Hey, I'm Arthur Saito </strong>I started as a software engineer in 2015. Brazilian, born in Fukui,
            Japan and living in Brazil. Just like many developers, I like to solve problems out there and I'm constantly
            working on some kind of problematic parallel challenge. When not online, I'm mostly likely traveling,
            gaming, playing some random sports or discovering new ways to drink coffe. Each interest adds a unique
            flavor to my life, shaping the way I engage with the world both online and off.
          </Paragraph>
        </Box>
      </Box>
    </>
  );
}
