"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Tabs, type Tab } from "./_topbar/tabs";

export function QEditor() {
  // TO_DO LIST:

  // Basic Features to incorporate into QuickCode Editor

  // [] 1. Upload custom files to edit
  // [] 2. View all uploaded files
  // [] 3. Switch between files
  // [] 4. Save the edited file
  // [] 5. Download the edited file

  // Advanced - Nice to haves

  // [] 1. Change Themes
  // [] 2. Editor Windows
  // [] 3. Terminal/Debugging tools
  // [] 4. Real-time previews

  const [currentFile, setCurrentFile] = useState(undefined);

  let data: Tab[] = [
    { title: "test1", href: "test1" },
    { title: "test2", href: "test2" },
    { title: "test3", href: "test3" },
    { title: "test4", href: "test4" },
    { title: "test5", href: "test5" },
    { title: "test6", href: "test6" },
  ];

  return (
    <main className="w-full">
      <div className="h-full w-full bg-blue-600">
        <div className=" grid w-min grid-flow-col space-x-0.5">
          <Tabs data={data} />
        </div>
        <Editor height="100vh" width="100vw" theme="vs-dark" />
      </div>
    </main>
  );
}
