import Link from 'next/link';
import { styled } from '../../stitches.config';
import { NotesPageProps } from '@/core/types/types';

export const AllNotes = ({ allPosts }: NotesPageProps) => {
  return (
    <ListGroup>
      {allPosts.map((post, index) => (
        <ListItem key={post.slug}>
          <Link href={`/${post.slug}`} passHref>
            <NoteContainer>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date ? new Date(post.date).toLocaleDateString() : 'No date'}</PostDate>
            </NoteContainer>
            <PostSubtitle>{post.description}</PostSubtitle>
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

const PostSubtitle = styled('h4', {
  fontSize: '15px',
  margin: '0',
  color: '$secondary',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
  lineHeight: '1.2em',
  maxHeight: '2.4em',
  position: 'relative',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 2,
});

const PostDate = styled('time', {
  fontSize: '16px',
  color: '$secondary',
});

export default AllNotes;
