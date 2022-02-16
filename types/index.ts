export type Post = {
  Title: string;
  Slug: string;
  Content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: 'en' | 'id' | string;
};
