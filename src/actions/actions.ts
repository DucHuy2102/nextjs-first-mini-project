'use server';


export async function createNewPost(formData: FormData) {
    const titlePost = formData.get('title') as string;
    const contentPost = formData.get('content') as string;

    await prima.post.create({
        data: {
            title: titlePost,
            content: contentPost,
        },
    });
}
