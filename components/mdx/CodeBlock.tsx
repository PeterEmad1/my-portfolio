"use client";

import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function CodeBlock({ children }: Props) {
  const [copied, setCopied] = useState(false);

  const code =
    typeof children === "string"
      ? children
      : (children as any)?.props?.children ?? "";

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group">
      <button
        onClick={copy}
        className="absolute right-3 top-3 text-xs bg-purple-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <pre className="bg-[#0f172a] text-white p-5 rounded-xl overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}