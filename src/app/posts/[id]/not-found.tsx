import { GoBackButtonComponent } from '@/components';

export default function NotFoundPage() {
    return (
        <div className='mt-36 flex flex-col items-center justify-center gap-y-5'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-red-500'>404</h1>
                <p className='text-xl'>Page not found</p>
            </div>

            <GoBackButtonComponent />
        </div>
    );
}
