export interface StaticPropsParams {
  params: {
    slug: string;
  };
}
export interface NotesStaticProps {
  notes: NoteDetails;
}

export interface NoteDetails {
  slug: string;
  title: string;
  date: string;
  description: string;
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
