import { NotesStaticProps, StaticPropsParams } from "@/core/types/types";
import { fetchAllNotes, fetchNotesBySlug, mdToHtml } from "@/lib/notes";
import { ArticleJsonLd } from "next-seo";
import Head from "next/head";
import NotFound from "./404";
import NoteLayout from "@/layout/NoteLayout";

export async function getStaticPaths() {
  const notes = await fetchAllNotes(["slug"]);

  const paths = notes.map((n) => {
    return {
      params: {
        slug: n.slug,
      },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  try {
    const notes = fetchNotesBySlug(params.slug, ["date", "content", "title", "image", "description", "slug"]);
    const content = await mdToHtml(notes.content || "");

    return {
      props: {
        ...notes,
        content,
      },
      revalidate: 60,
    };
  } catch (error) {
    return { props: { errorCode: 404, errorMessage: "Page not found" } };
  }
}

const Note = (props: NotesStaticProps) => {
  if (!props.title || !props.description || !props.slug || !props.date || !props.content) {
    return <NotFound />;
  }

  const title = `${props.title} - Arthur S.`;
  const description = `${props.description}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/${props.slug}`;
  const date = new Date(props.date).toISOString();
  const images = props.image ? `${baseUrl}${props.image}` : `${baseUrl}/static/arthur.jpeg`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
        <meta content={images} property="og:image"></meta>
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

Note.Layout = NoteLayout;

export default Note;
