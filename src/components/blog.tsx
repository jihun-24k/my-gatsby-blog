/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Listing from "./listing"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import Seo from "./seo"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Seo title="Writing" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h3" variant="styles.h3" sx={{ marginY: 2 }}>
          Writing
        </Heading>
        <Link
          sx={(t) => ({ ...t.styles?.a, variant: `links.secondary`, marginY: 2 })}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Link>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Blog
