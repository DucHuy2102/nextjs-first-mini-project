import { LoadingComponent } from '@/components';
import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

async function PostContent({ id }: { id: string }) {
    const data = await prisma.post.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!data) {
        notFound();
    }

    return (
        <>
            <h1 className='text-4xl font-semibold mb-7'>{data.title}</h1>
            <p className='max-w-[900px] mx-auto'>{data.content}</p>
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
