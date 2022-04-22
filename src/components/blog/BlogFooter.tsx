import { useRouter } from "next/router";
import { Post } from "types/Post";

interface Props {
  post: Post;
}

const types = {
  "/blog/[slug]": "posts",
  "/snippets/[slug]": "snippets",
  "/case-study/[slug]": "case-studies",
};

export const BlogFooter = ({ post }: Props) => {
  const router = useRouter();

  const type = types[router.pathname as keyof typeof types];

  const GITHUB_REPO_LINK =
    "https://github.com/Dev-CasperTheGhost/casper.dev/edit/main/src/data";
  const link = `${GITHUB_REPO_LINK}/${type}/${post.slug}.mdx`;

  return (
    <footer className="flex justify-end pt-12 pb-2 mb-5 border-b-2 border-blue-1">
      <a className="hover:underline" href={link}>
        Edit On GitHub
      </a>
    </footer>
  );
};
