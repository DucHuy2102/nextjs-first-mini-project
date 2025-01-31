import { Suspense } from 'react';
import { LoadingComponent, PostList } from '@/components';

export default async function PostPage() {
    return (
        <main className='text-center px-5 pt-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-5'>All Posts</h1>
            <Suspense fallback={<LoadingComponent />}>
                <PostList />
            </Suspense>
        </main>
    );
}
