import BlogListWithFilter from "@/components/BlogListWithFilter";
import BlurFade from "@/components/blur-fade";
import { getBlogPosts } from "@/lib/blog";
import { Navigation } from "@/components/Navbar";
import { BlogPostSkeleton } from "@/components/post-card";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { Spotlight } from "@/components/ui/spotlight";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="relative bg-black-100 flex items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
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

        <div className="absolute inset-0 z-0 pointer-events-none">
          <GridBackgroundDemo />
        </div>

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <section className="relative z-10 pt-20 pb-20">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="text-center mb-16">
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tighter text-white">
                Blog
              </h1>
              <p className="text-blue-100 text-sm md:text-lg max-w-2xl mx-auto mb-3">
                My thoughts on software development, share knowledge and
                advanced topics. These topics will also be turned into videos on
                YouTube and LinkedIn for those who prefer video content.
              </p>
            </div>
          </BlurFade>

          <div className="max-w-6xl mx-auto">
            <Suspense
              fallback={
                <div className="space-y-6">
                  <BlogPostSkeleton />
                  <BlogPostSkeleton />
                  <BlogPostSkeleton />
                </div>
              }
            >
              <BlogListWithFilter posts={posts} />
            </Suspense>
          </div>
        </section>
      </div>

      <Navigation variant="blog" />
    </main>
  );
}
