import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "Mastering React Hooks",
    excerpt: "A deep dive into React Hooks and how to use them effectively in your projects.",
  },
  {
    id: 2,
    title: "Building Scalable Next.js Applications",
    excerpt: "Learn best practices for creating large-scale applications with Next.js.",
  },
  {
    id: 3,
    title: "The Power of TypeScript in Frontend Development",
    excerpt: "Discover how TypeScript can improve your development workflow and reduce bugs.",
  },
]

export default function Blog() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/blog" className="text-primary hover:underline text-lg font-semibold">
          View all posts
        </Link>
      </div>
    </section>
  )
}

