import Articles from '@/components/ListNotes';
import { Paragraph } from '@/components/Paragraph';
import { Box } from '@/layout/ChakraUI';
import { fetchAllNotes } from '@/lib/notes';

interface NoteDetails {
  slug: string;
  title: string;
  date: string;
}
export interface NotesPageProps {
  allPosts: NoteDetails[];
}

export const getStaticProps = async () => {
  const allPosts = fetchAllNotes(['date', 'slug', 'title']);
  return {
    props: {
      allPosts,
    },
  };
};

export default function Notes({ allPosts }: NotesPageProps) {
  return (
    <>
      <Box mb={14}>
        <Paragraph>
          I refer to this section as "notes" because the stuff here is not as well-structured as article. To be honest,
          most of the content consists of simply notes from my Notion account.
        </Paragraph>
      </Box>
      <Box>
        <Articles allPosts={allPosts}></Articles>
      </Box>
    </>
  );
}
