import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import React from "react";
import { Info, AlertTriangle, AlertCircle } from "lucide-react";
import { Pre } from "./Mdxclient";
// import { Pre } from "@/components/mdx/mdx-client";

// --- Types ---
type CalloutType = "info" | "warning" | "danger";

interface CalloutProps {
  children: React.ReactNode;
  type?: CalloutType;
}

// --- Constants ---
const CALLOUT_CONFIG = {
  info: {
    icon: Info,
    className: "bg-blue-500/10 border-blue-500/50 text-blue-100",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-yellow-500/10 border-yellow-500/50 text-yellow-100",
  },
  danger: {
    icon: AlertCircle,
    className: "bg-red-500/10 border-red-500/50 text-red-100",
  },
} as const;

const PRETTY_CODE_OPTIONS = {
  theme: "github-dark",
  keepBackground: false,
};

// --- Components ---
const Callout: React.FC<CalloutProps> = ({ children, type = "info" }) => {
  const { icon: Icon, className } = CALLOUT_CONFIG[type];

  return (
    <div
      className={`my-8 flex items-start gap-4 rounded-xl border p-4 ${className}`}
    >
      <div className="mt-1">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 prose-p:m-0">{children}</div>
    </div>
  );
};

// --- MDX Components Mapping ---
const components = {
  Callout,
  pre: Pre,

  // Headings
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-12 mb-6 text-3xl font-bold tracking-tight text-white"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 border-b border-white/10 pb-2 text-2xl font-semibold text-white/90"
      {...props}
    />
  ),

  // Text
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-6 leading-8 text-gray-300/90" {...props} />
  ),

  // Code
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="relative rounded bg-white/5 px-[0.4rem] py-[0.2rem] font-mono text-[0.9em] text-cyan-400"
      {...props}
    />
  ),

  // Tables
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 w-full overflow-hidden rounded-xl border border-white/10">
      <table
        className="w-full border-collapse bg-white/5 text-left text-sm"
        {...props}
      />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-white/10 font-semibold text-white" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="border-b border-white/10 px-4 py-3" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className="border-b border-white/5 px-4 py-3 text-gray-300"
      {...props}
    />
  ),
};

// --- Main MDX Component ---
interface MDXProps {
  source: string;
}

export default function MDX({ source }: MDXProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, PRETTY_CODE_OPTIONS]],
        },
      }}
    />
  );
}
