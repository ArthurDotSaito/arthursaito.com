import { NotesStaticProps, StaticPropsParams } from '@/core/types/types';
import { fetchAllNotes, fetchNotesBySlug, mdToHtml } from '@/lib/notes';

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
    const notes = fetchNotesBySlug(params.slug, ['date', 'content', 'title', 'description', 'slug']);
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
};
