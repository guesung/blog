import { ContentLayout, ListItem } from '@components';
import { CardList } from '@guesung/ui';
import { getSeries } from '@utils';

export default function page() {
  const allSeries = getSeries();

  return (
    <ContentLayout>
      <ContentLayout.Title>Library.</ContentLayout.Title>
      <ContentLayout.Description>나만의 작은 서재</ContentLayout.Description>
      <ListItem
        coverSrc="/contents/series/cover.png"
        title="etc"
        href="/series/etc"
      />
    </ContentLayout>
  );
}
