'use client';

import { useRouter } from 'next/navigation';

export default function GoBackPreviousPage() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push('/posts')}
            className='bg-blue-500 text-white py-2 px-5 rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out'
        >
            Go back to post list
        </button>
    );
}
