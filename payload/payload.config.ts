import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- 2028 日月潭環潭大賽車 CMS',
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({}),
        },
      ],
    },
    {
      slug: 'news',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'publishedDate',
          type: 'date',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          options: [
            { label: '賽事公告', value: 'announcement' },
            { label: '車隊消息', value: 'team-news' },
            { label: '票務資訊', value: 'ticketing' },
            { label: '媒體報導', value: 'media' },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        {
          name: 'excerpt',
          type: 'textarea',
        },
      ],
    },
    {
      slug: 'teams',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'nameEn',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          options: [
            { label: 'GT3 Pro', value: 'gt3-pro' },
            { label: 'GT3 Am', value: 'gt3-am' },
            { label: 'SML-E', value: 'sml-e' },
          ],
          required: true,
        },
        {
          name: 'car',
          type: 'text',
        },
        {
          name: 'logo',
          type: 'text',
        },
      ],
    },
    {
      slug: 'drivers',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'nameEn',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          required: true,
        },
        {
          name: 'number',
          type: 'number',
          required: true,
        },
        {
          name: 'team',
          type: 'relationship',
          relationTo: 'teams',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
        },
      ],
    },
    {
      slug: 'sponsors',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'tier',
          type: 'select',
          options: [
            { label: '冠名贊助', value: 'title' },
            { label: '白金', value: 'platinum' },
            { label: '黃金', value: 'gold' },
            { label: '銀牌', value: 'silver' },
          ],
        },
        {
          name: 'logo',
          type: 'text',
        },
        {
          name: 'website',
          type: 'text',
        },
      ],
    },
  ],
  globals: [
    {
      slug: 'site-settings',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          required: true,
        },
        {
          name: 'siteDescription',
          type: 'textarea',
        },
        {
          name: 'countdownDate',
          type: 'date',
          required: true,
        },
        {
          name: 'socialLinks',
          type: 'group',
          fields: [
            {
              name: 'facebook',
              type: 'text',
            },
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'youtube',
              type: 'text',
            },
            {
              name: 'x',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
