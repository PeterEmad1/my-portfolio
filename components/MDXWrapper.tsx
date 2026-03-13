"use client";

import { useMDXComponents } from "@/mdx-components";
import { MDXProvider } from "@mdx-js/react";

export default function MDXWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const components = useMDXComponents({});

  return <MDXProvider components={components}>{children}</MDXProvider>;
}