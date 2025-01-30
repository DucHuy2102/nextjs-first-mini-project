export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen max-w-[1100px] mx-auto bg-white flex flex-col shadow-xl'>
            {children}
        </div>
    );
}
