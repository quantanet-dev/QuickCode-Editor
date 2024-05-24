import Link from "next/link";

import { QEditor } from "~/app/_components/qeditor";
import { api } from "~/trpc/server";

export default async function Home() {

  return (
    <div>
    <QEditor/>
    </div>
  );
}

