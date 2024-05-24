"use client";

import { useState } from "react";

export type Tab = {
  title: string;
  href: string;
};

export function Tabs({ data: data }: { data: Tab[] }) {
  const [currentTabs, setCurrentTabs] = useState(data);

  function removeTab(tabToDelete: Tab) {
    const newTabs = currentTabs.filter((tab) => tab !== tabToDelete);
    setCurrentTabs(newTabs);
  }

  if (currentTabs.length > 0) {
    return currentTabs.map((tab: Tab) => {
      return (
        <div className="flex justify-between bg-blue-800 px-2" key={tab.href}>
          <a
            className="flex justify-center p-2 text-center text-sm text-white"
            href={tab.href}
          >
            {tab.title}
          </a>
          <span
            onClick={() => {
              removeTab(tab);
            }}
          >
            x
          </span>
        </div>
      );
    });
  } else {
    return null;
  }
}
