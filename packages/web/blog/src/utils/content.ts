import { DocumentTypes, allContents } from '@contents';
import { compareDesc } from 'date-fns';

class Content {
  contents: DocumentTypes[];
  constructor() {
    this.contents = allContents;
    this.sortContentByDate();
  }
  // 날짜 순 정렬
  sortContentByDate() {
    return this.contents.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  }
  // 발행된 컨텐츠만 필터링
  filterPublishedContents() {
    return this.contents.filter(content => content.isPublished);
  }

  get getAllContents() {
    return this.contents;
  }
  get getAllSeries(): DocumentTypes['series'][] {
    return [...new Set(this.contents.map(content => content.series))].filter(
      series => series
    );
  }
  get getContentBySlug() {
    return (slug: string) =>
      this.contents.find(content => content.slug === slug);
  }
  get getSeriesCount() {
    return (series: string) =>
      this.contents.filter(content => content.series === series).length;
  }
  get getSeriesLastModified() {
    return (series: string) => {
      const contents = this.contents.filter(
        content => content.series === series
      );
      return contents[contents.length - 1]?.lastModified ?? '';
    };
  }
  get getAllTags() {
    return [...new Set(this.contents.flatMap(content => content.tags))];
  }
  get getContentsByTag() {
    return (tag: string) =>
      this.contents.filter(content => content.tags?.includes(tag));
  }
}

export const content = new Content();
