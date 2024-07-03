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
  series: {
    type: 'enum',
    options: [
      'posts',
      'translations',
      'etc',
      'deep-dive',
      'trouble-shooting',
      'worried',
    ],
    default: 'posts',
    required: true,
  },
  lastModified: { type: 'date', required: false },
  description: { type: 'string', required: false },
  tags: { type: 'list', of: { type: 'string' }, required: false },
};

const Content = defineDocumentType(() => ({
  name: 'Content',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    ...commonFields,
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: content => content._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
    coverSrc: {
      type: 'string',
      resolve: content => `/contents/${content._raw.flattenedPath}/cover.png`,
    },
  },
}));

const rehypeOptions: PrettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: true,
  defaultLang: {
    block: 'typescript',
  },
};

export default makeSource({
  contentDirPath: 'public/contents',
  documentTypes: [Content],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode as any, rehypeOptions]],
  },
});
