'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { MdArticle } from 'react-icons/md';

const LINKS = [
    { name: 'Home', href: '/', icon: <IoHome /> },
    { name: 'Posts', href: '/posts', icon: <MdArticle /> },
];

export default function Header() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <header className='flex items-center justify-between py-4 px-10 border-b'>
            <Link href='/'>
                <Image
                    src={
                        'https://img.freepik.com/premium-vector/vector-horse-head-face-logo-tshirt-design-element-isolated-black-background_826454-1459.jpg'
                    }
                    alt='Eagle Logo'
                    width={40}
                    height={40}
                    className='rounded-lg'
                />
            </Link>
            <nav>
                <ul className='flex gap-x-5 font-semibold'>
                    {LINKS.map((link) => {
                        return (
                            <li key={link.href}>
                                <Link
                                    className={`${
                                        pathname === link.href ? 'text-zinc-900' : 'text-zinc-400'
                                    } hover:underline transition-colors duration-200 flex items-center gap-x-1`}
                                    href={link.href}
                                >
                                    {link.icon}
                                    <span className='hidden md:inline'>{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
