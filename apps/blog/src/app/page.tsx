import { Card, CardList } from '@components';
import { Content } from '@contents';
import { getContents } from '@utils';

export default function Page() {
  return (
    <div className="max-w-1000 mx-auto text-center">
      <div className="text-title1 my-20">ALL POSTS.</div>
      <CardList<Content>
        items={getContents({ series: 'posts' })}
        render={content => (
          <Card
            key={content._id}
            href={`${content.series}/${content.slug}`}
            title={content.title}
            date={content.date}
          />
        )}
      />
      <div className="text-title1 my-20">ALL TRANSLATIONS.</div>
      <CardList<Content>
        items={getContents({ series: 'translations' })}
        render={content => (
          <Card
            key={content._id}
            href={`translations/${content.slug}`}
            title={content.title}
            date={content.date}
          />
        )}
      />
    </div>
  );
}
