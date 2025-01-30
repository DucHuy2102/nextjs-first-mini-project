export default async function PostDetail({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const data = await res.json();

    return (
        <main className='px-10 pt-24 text-center'>
            <h1 className='text-4xl font-semibold mb-7'>{data.title}</h1>
            <p className='max-w-[900px] mx-auto'>{data.body}</p>
        </main>
    );
}
