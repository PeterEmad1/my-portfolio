import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  readTime: string;
  category?: string | string[];
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content");

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    slug,
    metadata: data as PostMetadata,
    content,
  };
}

async function getAllPosts(
  dir: string,
): Promise<{ slug: string; metadata: PostMetadata }[]> {
  const mdxFiles = getMDXFiles(dir);

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, ".mdx");
      const post = await getPost(slug);
      if (!post) return null;
      return { slug, metadata: post.metadata };
    }),
  );

  return posts.filter(
    (post): post is { slug: string; metadata: PostMetadata } => post !== null,
  );
}

export async function getBlogPosts() {
  const posts = await getAllPosts(postsDirectory);
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
}
