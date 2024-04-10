'use client';

import { Card } from '../../components';

export default function PostList() {
  // TODO : Client Data Fetching

  return (
    <div className="grid grid-cols-2 gap-20">
      <Card
        id="1"
        title="Title"
        date="2021-09-13"
        tagList={['React.js', 'Next.js']}
        image="https://source.unsplash.com/random"
      />
      <Card
        id="1"
        title="Title"
        date="2021-09-13"
        tagList={['React.js', 'Next.js']}
        image="https://source.unsplash.com/random"
      />
      <Card
        id="1"
        title="Title"
        date="2021-09-13"
        tagList={['React.js', 'Next.js']}
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}
