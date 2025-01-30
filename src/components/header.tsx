import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <Image
                src={'https://img.freepik.com/premium-vector/eagle-logo-vector_686646-1510.jpg'}
                alt='Eagle Logo'
                width={100}
                height={100}
            />
        </header>
    );
}
