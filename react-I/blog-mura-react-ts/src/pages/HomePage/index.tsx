import { PostList } from '../../components/PostList'

import { posts } from '../../posts'

export function HomePage() {
  return <PostList posts={posts} />
}
