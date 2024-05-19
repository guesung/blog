import { ContentLayout } from '@components';
import { DragAndDrop } from './components';

export default function page() {
  return (
    <ContentLayout>
      <ContentLayout.Title>Playground</ContentLayout.Title>
      <ContentLayout.Description>
        This page is for testing new features.
      </ContentLayout.Description>
      <DragAndDrop />
    </ContentLayout>
  );
}
