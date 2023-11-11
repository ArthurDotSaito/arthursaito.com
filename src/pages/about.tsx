import { Paragraph } from '@/components/Paragraph';
import HeadingBox from '@/components/TitleHeadingBox';
import { Box } from '@/layout/ChakraUI';

export default function About() {
  return (
    <>
      <HeadingBox>Ohai O/</HeadingBox>
      <Paragraph>
        I'm not exactly sure why I decided to write "my own webpage", but I guess it's most likely due to some kind of
        necessity to share something with someone. As I'm not a big fan of social media (Instagram, Linkedin, etc), the
        "blog old school stuff" might fit well for me (However, you're free to connect/follow me in some of the social
        media if you want).
      </Paragraph>
    </>
  );
}
