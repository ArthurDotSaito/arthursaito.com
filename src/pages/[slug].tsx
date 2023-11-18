import { NotesStaticProps, StaticPropsParams } from '@/core/types/types';
import { fetchAllNotes, fetchNotesBySlug, mdToHtml } from '@/lib/notes';
import { ArticleJsonLd } from 'next-seo';
import Head from 'next/head';

export async function getStaticPaths() {
  const notes = await fetchAllNotes(['slug']);
  const paths = notes.map((n) => {
    return {
      params: {
        slug: n.slug,
      },
    };
  });

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  try {
    const notes = fetchNotesBySlug(params.slug, ['date', 'content', 'title', 'image', 'description', 'slug']);
    const content = await mdToHtml(notes.content || '');

    return {
      props: {
        ...notes,
        content,
      },
      revalidate: 120,
    };
  } catch (error) {
    console.log(error);
  }
}

const Note = (props: NotesStaticProps) => {
  const title = `${props.notes.title} - Arthur S.`;
  const description = `${props.notes.description}`;
  const url = `http://localhost:3000/${props.notes.slug}`;
  const date = new Date(props.notes.date).toISOString();
  const images = `${props.notes.image}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
      </Head>
      <ArticleJsonLd
        authorName="Arthur Saito"
        type="Blog"
        url={url}
        images={[images]}
        title={title}
        datePublished={date}
        description={description}
      ></ArticleJsonLd>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </>
  );
};
