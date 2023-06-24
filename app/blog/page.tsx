// нет "use client" значит серверный компоннет

import { getAllPosts } from '@/services/getPosts'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Next App'
}

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <>
      <h1>Blog page</h1>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </>
  )
}

// import Posts from '@/components/Posts'
// import PostSearch from '@/components/PostSearch'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Blog | Next App'
// }

// export default function Blog() {
//   // нам больше не понадобится эти сущности
//   // const [posts, setPosts] = useState<any[]>([])
//   // const [loading, setLoading] = useState(true)
//   // useEffect(() => {
//   //   getAllPosts()
//   //     .then(setPosts)
//   //     // .then((data) => setPosts(data))
//   //     .finally(() => setLoading(false))
//   // }, [])

//   return (
//     <>
//       <h1>Blog page</h1>
//       <PostSearch />
//       <Posts />
//     </>
//   )
// }
