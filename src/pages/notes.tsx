import { AllNotes } from '@/components/ListNotes';
import { Paragraph } from '@/components/Paragraph';
import { NotesPageProps } from '@/core/types/types';
import { Box } from '@/layout/ChakraUI';
import { fetchAllNotes } from '@/lib/notes';
import Head from 'next/head';

export const getStaticProps = async () => {
  const allPosts = await fetchAllNotes(['date', 'slug', 'title', 'description']);
  const meta = {
    title: 'Arthur Saito - Notes',
    description:
      'Here is Arthur notes. You can read some text produced by Arthur. Not very strict, just some random notes.',
  };
  return {
    props: {
      allPosts,
      meta,
    },
  };
};

export default function Notes({ allPosts, meta }: NotesPageProps) {
  const { title, description } = meta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} property="og:description" />
        <meta content={description} name="description" />
      </Head>
      <Box mb={14}>
        <Paragraph>
          I refer to this section as "notes" because the stuff here is not as well-structured as article. To be honest,
          most of the content consists of simply notes from my Notion account.
        </Paragraph>
      </Box>
      <Box>
        <AllNotes allPosts={allPosts} meta={meta}></AllNotes>
      </Box>
    </>
  );
}
