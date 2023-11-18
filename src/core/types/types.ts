export interface StaticPropsParams {
  params: {
    slug: string;
  };
}
export interface NotesStaticProps {
  notes: NoteDetails;
  content: string;
}

export interface NoteDetails {
  slug: string;
  title: string;
  date: string;
  description?: string;
  image?: string;
}

export interface MetaProps {
  title: string;
  image?: string;
  description: string;
}

export interface NotesPageProps {
  allPosts: NoteDetails[];
  meta: MetaProps;
}
