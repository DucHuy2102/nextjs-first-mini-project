import { LoadingComponent } from '@/components';
import { Suspense } from 'react';

async function PostContent({ id }: { id: string }) {
    await new Promise((r) => setTimeout(r, 2000));
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await res.json();

    return (
        <>
            <h1 className='text-4xl font-semibold mb-7'>{data.title}</h1>
            <p className='max-w-[900px] mx-auto'>{data.body}</p>
        </>
    );
}

export default async function PostDetail({
    params,
}: {
    params: {
        id: string;
    };
}) {
    return (
        <main className='px-10 pt-24 text-center'>
            <Suspense fallback={<LoadingComponent />}>
                <PostContent id={params.id} />
            </Suspense>
        </main>
    );
}
