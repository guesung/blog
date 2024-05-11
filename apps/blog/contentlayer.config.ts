import {
  FieldDefs,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const commonFields: FieldDefs = {
  title: { type: 'string', required: true },
  date: { type: 'date', required: true },

  isPublished: { type: 'boolean', required: true },
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    ...commonFields,
    imgUrl: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    description: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.replace(/^[^\/]*\/?/, ''),
    },
  },
}));

const Translation = defineDocumentType(() => ({
  name: 'Translation',
  filePathPattern: `translations/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    ...commonFields,
    url: { type: 'string', required: true },
  },
  computedFields: {
    skill: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.split('/')[1],
    },
    slug: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.split('/')[2],
    },
  },
}));

const rehypeOptions: PrettyCodeOptions = {
  theme: 'one-dark-pro',
  defaultLang: {
    block: 'typescript',
  },
};

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Post, Translation],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode as any, rehypeOptions]],
  },
});
