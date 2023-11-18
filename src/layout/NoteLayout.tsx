import { BaseWrapper } from '@/components/BaseWrapper';
import { NotesStaticProps } from '@/core/types/types';
import { styled } from '@stitches/react';
import NavBar from '@/components/NavBar';
import { PageContainer } from '@/components/PageContainer';
import Date from '@/components/Date';

export default function NoteLayout({ title, image, date, content }: NotesStaticProps) {
  console.log(title);
  console.log(date);
  return (
    <BaseWrapper>
      <NavBar />
      <PageContainer>
        <PostContentTitle>{title}</PostContentTitle>
        <PostContentSubtitle>
          <Date dateString={date}></Date>
        </PostContentSubtitle>
      </PageContainer>
    </BaseWrapper>
  );
}

export const PostTitle = styled('h1', {
  textAlign: 'center',
  '@bp2': {
    fontSize: '72px',
    lineHeight: '90px',
    maxWidth: '60%',
  },
});

export const PostContentTitle = styled(PostTitle, {
  color: '$primary',
  margin: '90px auto 0',
  maxWidth: 'none',
  fontSize: '48px',
  lineHeight: '60px',
  textAlign: 'center',
  '@bp2': {
    marginTop: 0,
  },
});

const PostSubtitle = styled('h2', {
  color: '#fff',
  fontSize: '16px',
  fontWeight: 500,
  textAlign: 'center',
});

const PostContentSubtitle = styled(PostSubtitle, {
  color: '$secondary',
  fontSize: '16px',
  margin: '0 0 60px',
});
