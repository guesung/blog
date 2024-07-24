import IsLoadingComponent from './components/IsLoadingComponent';
import QueryProvider from './components/QueryProvider';

export default function Page() {
  return (
    <QueryProvider>
      <IsLoadingComponent />
    </QueryProvider>
  );
}
