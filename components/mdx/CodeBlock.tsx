"use client";

import { useState } from "react";

export default function CodeBlock({ children }: any) {
  const [copied, setCopied] = useState(false);

  const code = children?.props?.children ?? "";

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group my-6">
      <button
        onClick={copy}
        className="absolute right-3 top-3 text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      {children}
    </div>
  );
}