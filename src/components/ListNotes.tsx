import Link from 'next/link';
import { styled } from '../../stitches.config';
import { NotesPageProps } from '@/pages/notes';

export const Notes = ({ allPosts }: NotesPageProps) => {
  return (
    <ListGroup>
      {allPosts.map((post, index) => (
        <ListItem key={post.slug}>
          <Link href={`/${post.slug}`} passHref>
            <NoteContainer>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date ? new Date(post.date).toLocaleDateString() : 'No date'}</PostDate>
            </NoteContainer>
          </Link>
        </ListItem>
      ))}
    </ListGroup>
  );
};

const ListGroup = styled('ul', {
  listStyle: 'none',
  margin: '10px 0 0',
  padding: '0',
});

const ListItem = styled('li', {
  '&:hover': {
    background: '$hover',
    cursor: 'pointer',
  },
  marginBottom: '20px',
  padding: '10px',
  borderRadius: '0.5rem',
  width: '100%',
});

const NoteContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const PostTitle = styled('h2', {
  fontSize: '20px',
  margin: '0',
  color: '$red',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const PostDate = styled('time', {
  fontSize: '16px',
  color: '$secondary',
});

export default Notes;
