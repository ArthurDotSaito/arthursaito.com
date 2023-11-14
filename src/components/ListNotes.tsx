import Link from 'next/link';
import { styled } from '../../stitches.config';
import { fetchAllNotes } from '../lib/notes';

const allPosts = fetchAllNotes(['date', 'slug', 'title']);

export const Articles = () => {
  return (
    <ListGroup>
      {allPosts.map((post, index) => (
        <ListItem key={post.slug}>
          <Link href={`/notes/${post.slug}`} passHref>
            <a>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date ? new Date(post.date).toLocaleDateString() : 'No date'}</PostDate>
            </a>
          </Link>
        </ListItem>
      ))}
    </ListGroup>
  );
};

export const ListGroup = styled('ul', {
  listStyle: 'none',
  margin: '10px 0 0',
  padding: '0',
});

const ListItem = styled('li', {
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: '0',
  },
});

const PostTitle = styled('h2', {
  fontSize: '20px',
  margin: '0',
  color: '#0070f3', // Exemplo de cor, ajuste conforme seu design
  '&:hover': {
    textDecoration: 'underline',
  },
});

const PostDate = styled('time', {
  fontSize: '16px',
  color: '#666', // Exemplo de cor, ajuste conforme seu design
});
