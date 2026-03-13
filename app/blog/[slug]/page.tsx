import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/blur-fade";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";
import { getBlogPosts, getPost } from "@/components/data/blog";
import { DATA } from "@/data/resume";
import { SyntaxHighlighter } from "@/components/SyntaxHighlighter";
import { Navigation } from "@/components/Navbar";
import { Spotlight } from "@/components/ui/spotlight";
import rehypePrettyCode from "rehype-pretty-code";
import MDX from "@/components/mdx/MDX";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // 1. Change type to Promise
}): Promise<Metadata | undefined> {
  const { slug } = await params; // 2. Await the params

  let post = await getPost(slug);

  if (!post) return; // Add a safety check

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-black-100 flex  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        {/* spotlight effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* grid background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* <GridBackgroundDemo /> */}
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <section id="blog" className="relative z-10 pt-20 pb-20">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.metadata.title,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                  ? `${DATA.url}${post.metadata.image}`
                  : `${DATA.url}/og?title=${post.metadata.title}`,
                url: `${DATA.url}/blog/${post.slug}`,
                author: {
                  "@type": "Person",
                  name: DATA.name,
                },
              }),
            }}
          />

          {/* Back button */}
          <BlurFade delay={0.04}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </BlurFade>

          {/* Article header */}
          <BlurFade delay={0.08}>
            <div className="max-w-4xl mx-auto border-b border-gray-700 mb-4">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-4xl tracking-tighter text-white mb-2">
                {post.metadata.title}
              </h1>

              <div className=" flex-col gap-2! md:flex-row justify-between items-center mb-5">
                <Suspense fallback={<p className="h-5 " />}>
                  <p className="text-sm  text-gray-300 mb-6 font-mono">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </Suspense>
                {/* {post.metadata.summary && (
                  <p className="text-gray-300 text-sm max-w-md text-left">
                    {post.metadata.summary}
                  </p>
                )} */}
              </div>
            </div>
          </BlurFade>

          {/* Article content */}
          <BlurFade delay={0.12}>
            <article className="prose prose-invert max-w-4xl mx-auto">
              <MDX source={post.content} />
            </article>
          </BlurFade>
        </section>
      </div>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter />

      {/* Blog Responsive Navigation */}
      <Navigation variant="blog" />
    </main>
  );
}
