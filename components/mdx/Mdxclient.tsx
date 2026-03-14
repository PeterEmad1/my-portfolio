"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 z-20 rounded-md border border-white/10 bg-white/5 p-1.5 transition-all hover:bg-white/10"
      aria-label="Copy code to clipboard"
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 text-gray-400" />
      )}
    </button>
  );
};

export const Pre: React.FC<PreProps> = ({ children, ...props }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (preRef.current) {
      setContent(preRef.current.textContent || "");
    }
  }, [children]);

  return (
    <div className="relative my-8">
      <CopyButton text={content} />
      <pre
        ref={preRef}
        {...props}
        className="overflow-x-auto rounded-lg p-4 font-mono text-sm leading-relaxed"
      >
        {children}
      </pre>
    </div>
  );
};
