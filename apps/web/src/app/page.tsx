import DragAndDrop from "../components/DragAndDrop";
import { isServer } from "@repo/utils/isServer";

export default function Page() {
  if (!isServer) console.log(MouseEvent);

  return (
    <main>
      <DragAndDrop />
    </main>
  );
}
