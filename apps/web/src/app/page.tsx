import { useHello } from "@guesung/hooks";
import { SquareBox } from "@guesung/ui";

export default function Page() {
  useHello();
  return (
    <main>
      <SquareBox />
    </main>
  );
}
