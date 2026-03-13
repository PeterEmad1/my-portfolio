import type { MDXComponents } from "mdx/types";
import CodeBlock from "./components/mdx/CodeBlock";
import Callout from "./components/mdx/Callout";

type CustomMDXComponents = MDXComponents & {
  Callout: typeof Callout;
};

export function useMDXComponents(
  components: MDXComponents
): CustomMDXComponents {
  return {
    pre: CodeBlock,
    Callout,
    ...components,
  };
}