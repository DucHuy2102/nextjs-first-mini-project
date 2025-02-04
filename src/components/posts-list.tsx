import { prisma } from '@/lib/db';
import Link from 'next/link';

export default async function PostsList() {
    const posts = await prisma.post.findMany();

    return (
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
    );
}
