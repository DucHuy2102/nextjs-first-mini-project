import { AiOutlineLoading } from 'react-icons/ai';

export default function Loading() {
    return (
        <div className='flex items-center justify-center space-x-2 text-xl text-zinc-500'>
            <AiOutlineLoading className='animate-spin font-bold' />
            <span>Loading...</span>
        </div>
    );
}
