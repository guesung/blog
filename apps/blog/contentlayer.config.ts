import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from 'rehype-pretty-code';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    isPublished: { type: 'boolean', required: true },
    imgUrl: { type: 'string', required: false },
  },
  computedFields,
}));

const Translation = defineDocumentType(() => ({
  name: 'Translation',
  filePathPattern: `translation/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    isPublished: { type: 'boolean', required: true },
    imgUrl: { type: 'string', required: false },
  },
  computedFields,
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
