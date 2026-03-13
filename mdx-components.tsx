import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/mdx/CodeBlock";
import Callout from "@/components/mdx/Callout";

export const mdxComponents: MDXComponents = {
  pre: CodeBlock,
  Callout,
};