import { AnimationContainer } from '@/components/Animation-Container';
import { Paragraph } from '@/components/Paragraph';
import ThreeJsScene from '@/components/lib/ThreeScene';
import { Avatar, Box, Container, Heading } from '@/layout/ChakraUI';
import TypewriterComponent from 'typewriter-effect';
import { styled } from '../../stitches.config';
import Academics from '@/components/Academics';
import Career from '@/components/Career';

export default function Index() {
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
        Hello,
        <TypewriterComponent
          options={{
            strings: [" I'm Arthur Saito", " I'm a engineer", " I'm a developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>
      <HeadingBox>Just commiting everywhere</HeadingBox>
      <Box display="flex" flexDir={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center">
        <Box maxW={'18rem'} mr={{ base: '0', md: '2rem' }} mb={{ base: '2rem', md: '0' }} h={'auto'}>
          <Avatar
            src="/static/arthur.jpeg"
            size="full"
            loading="lazy"
            maxW={['90vw', '80vw', '70vw', '60vw', '50vw']}
          ></Avatar>
        </Box>
        <Box>
          <Paragraph style={{ maxWidth: '360px' }}>
            <strong>Hey, I'm Arthur Saito </strong>I started as a software engineer in 2015. Brazilian, born in Fukui,
            Japan and living in Brazil. Just like many developers, I like to solve problems out there and I'm constantly
            working on some kind of problematic parallel challenge. When not online, I'm mostly likely gaming, playing
            some random sports or discovering new ways to drink coffe. My interests are very diverse, although sometimes
            restricted, and each one of them adds a unique flavor to my life, shaping the way I engage with the world
            both online and off.
          </Paragraph>
        </Box>
      </Box>
      <Container>
        <h2>Academics</h2>
        <Academics />
      </Container>
      <Container>
        <h2>Career</h2>
        <Career />
      </Container>
    </>
  );
}

const HeadingBox = styled('div', {
  fontFamily: '$heading',
  fontSize: '35px',
  color: '$pink',
  marginBottom: '2rem',
});
