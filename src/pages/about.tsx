import { Paragraph } from '@/components/Paragraph';
import HeadingBox from '@/components/TitleHeadingBox';
import SocialMediaSection from '@/components/socialMediaPlatform';
import { MetaProps } from '@/core/types/types';
import { Box } from '@chakra-ui/layout';
import Head from 'next/head';

export async function getStaticProps() {
  const meta = {
    title: 'Arthur Saito - About',
    description: 'Here is some information about why this webpage exists. Also, there is some social media stuff',
  };

  return { props: meta };
}

export default function About(props: MetaProps) {
  const { title, description } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
      </Head>
      <HeadingBox>Ohai O/</HeadingBox>
      <Box mb={14}>
        <Paragraph>
          I'm not entirely sure why I decided to create "my own webpage", but I suppose it's primarily because I feel
          the need to share something with others . Since I'm not the biggest fan of social media platforms like
          Instagram and/or even LinkedIn, the idea of an 'old school' blog seems more appealing to me. However, feel
          free to connect with or follow me on any of these social media platforms if you wish. I have a wide range of
          interests and can write about anything that comes to mind in this space, although most 'notes' or 'articles'
          will be most likely about tech stuff.
        </Paragraph>
      </Box>
      <HeadingBox>On the Web</HeadingBox>
      <SocialMediaSection />
    </>
  );
}
