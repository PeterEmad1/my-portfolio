import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import React from "react";
import { Info, AlertTriangle, AlertCircle } from "lucide-react";
import { Pre } from "./Mdxclient";

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
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-white/80" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="mt-6 mb-2 text-lg font-medium text-white/70" {...props} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="mt-4 mb-2 text-base font-medium text-white/60" {...props} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="mt-4 mb-2 text-sm font-medium text-white/50" {...props} />
  ),

  // Text
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-6 leading-8 text-gray-300/90" {...props} />
  ),

  // Lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 ml-6 list-disc space-y-2 text-gray-300/90" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mt-4 ml-6 list-decimal space-y-2 text-gray-300/90"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props} />
  ),

  // Blockquote
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-4 border-white/20 pl-4 italic text-gray-400"
      {...props}
    />
  ),

  // Horizontal rule
  hr: () => <hr className="my-8 border-white/10" />,

  // Inline code
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="relative rounded bg-white/5 px-[0.4rem] py-[0.2rem] font-mono text-[0.9em] text-cyan-400"
      {...props}
    />
  ),

  // Links
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300 transition-colors duration-200"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  // Images
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="my-8 rounded-xl border border-white/10 w-full" {...props} />
  ),

  // Strong & Em
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-gray-300" {...props} />
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
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-white/5" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="transition-colors hover:bg-white/5" {...props} />
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
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrettyCode, PRETTY_CODE_OPTIONS]],
        },
      }}
    />
  );
}
