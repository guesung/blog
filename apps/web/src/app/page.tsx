import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { isServer } from "@repo/utils/isServer";

export default function Page(): JSX.Element {
  if (!isServer) console.log(MouseEvent);
  
  return (
    <main className={styles.main}>
      <Button appName="aa">Click</Button>
    </main>
  );
}
