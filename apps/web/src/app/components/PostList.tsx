'use client';

import { Card } from '../../components';

export default function PostList() {
  // TODO : Client Data Fetching

  return (
    <div>
      <Card
        id="1"
        title="Title"
        description="Description"
        date="2021-09-13"
        tags={['React.js', 'Next.js']}
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}
