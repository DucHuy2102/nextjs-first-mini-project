import { createNewPost } from '@/actions/actions';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { IoIosSend } from 'react-icons/io';

export default async function CreatePost() {
    return (
        <main className='text-center px-5 pt-32 mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create a new post</h1>
            <form
                action={createNewPost}
                className='flex flex-col max-w-[600px] justify-center items-center space-y-2'
            >
                <input
                    required
                    autoFocus
                    type='text'
                    name='title'
                    placeholder='Enter title post'
                    className='border rounded-lg py-2 px-5 min-w-[20vw] focus:border-gray-300 outline-none'
                />
                <textarea
                    required
                    rows={10}
                    name='content'
                    placeholder='Enter content post'
                    className='border rounded-lg py-2 px-5 min-w-[20vw] focus:border-gray-300 outline-none'
                />
                <button
                    className='bg-blue-500 text-white py-2 min-w-[20vw] rounded-md 
                    flex items-center justify-center gap-x-1
                hover:bg-blue-600 transition-colors duration-200 ease-in-out'
                >
                    <IoIosSend />
                    Create
                </button>
            </form>
            <LogoutLink
                className='bg-red-500 text-white px-4 py-2 rounded-md absolute bottom-16 right-[23vw]
                hover:bg-red-600 transition-colors duration-200 ease-in-out'
            >
                Logout
            </LogoutLink>
        </main>
    );
}
