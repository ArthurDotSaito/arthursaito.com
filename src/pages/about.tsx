import { Paragraph } from '@/components/Paragraph';
import HeadingBox from '@/components/TitleHeadingBox';
import { Button, Container } from '@/layout/ChakraUI';
import { Box } from '@chakra-ui/layout';

export default function About() {
  return (
    <>
      <HeadingBox>Ohai O/</HeadingBox>
      <Box mb={14}>
        <Paragraph>
          I'm not entirely sure why I decided to create "my own webpage", but I suppose it's primarily because I feel
          the need to share something with others . Since I'm not the biggest fan of social media platforms like
          Instagram and/or even LinkedIn, the idea of an 'old school' blog seems more appealing to me. However, feel
          free to connect with or follow me on any of these social media platforms if you wish. I have a wide range of
          interests and can write about anything that comes to mind in this space. although most 'notes' or 'articles'
          will be most likely about tech stuff.
        </Paragraph>
      </Box>
      <HeadingBox>On the Web</HeadingBox>
      <Box>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<i className="pi pi-github" style={{ fontSize: '2rem' }} />}
        >
          @ArthurDotSaito
        </Button>
      </Box>
      <Box>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<i className="pi pi-linkedin" style={{ fontSize: '2rem' }} />}
        >
          linkedin.com/arthur-saito
        </Button>
      </Box>
      <Box>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<i className="pi pi-instagram" style={{ fontSize: '2rem' }} />}
        >
          linkedin.com/arthur-saito
        </Button>
      </Box>
    </>
  );
}
