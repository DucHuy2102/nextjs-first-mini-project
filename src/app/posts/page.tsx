import Link from 'next/link';

interface IPost {
    id: number;
    title: string;
}

export default async function PostPage() {
    const res = await fetch('https://dummyjson.com/posts?limit=7');
    const data = await res.json();
    const {
        posts,
    }: {
        posts: IPost[];
    } = data;

    return (
        <main className='text-center px-5 pt-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-5'>All Posts</h1>
            <ul>
                {posts.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <li
                            className='text-xl font-medium rounded-lg border p-5 mb-5
                        hover:bg-gray-100 text-zinc-500 hover:text-zinc-900 transition-colors duration-200 ease-in-out
                        '
                        >
                            {post.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    );
}
