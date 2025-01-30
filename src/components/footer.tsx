export default function Footer() {
    return (
        <footer className='mt-auto text-center text-zinc-400 font-semibold py-4 border-t'>
            <small>&copy; {new Date().getFullYear()} Eagle Blog. All rights reserved.</small>
        </footer>
    );
}
