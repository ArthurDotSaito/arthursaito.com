import Articles from '@/components/ListNotes';
import { Paragraph } from '@/components/Paragraph';
import { Box } from '@/layout/ChakraUI';
import { fetchAllNotes } from '@/lib/notes';
import Head from 'next/head';

export interface NoteDetails {
  slug: string;
  title: string;
  date: string;
}

interface MetaProps {
  title: string;
  description: string;
}

export interface NotesPageProps {
  allPosts: NoteDetails[];
  meta: MetaProps;
}

export const getStaticProps = async () => {
  const allPosts = fetchAllNotes(['date', 'slug', 'title']);
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
        <Articles allPosts={allPosts} meta={meta}></Articles>
      </Box>
    </>
  );
}
