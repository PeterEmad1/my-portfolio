import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content");

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  return {
    slug,
    metadata: data,
    content,
  };
}

async function getAllPosts(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, ".mdx");
      const { metadata } = await getPost(slug);

      return {
        slug,
        metadata,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(postsDirectory);
}