export async function load({ params, fetch }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const guide = await res.json();

    if (res.ok) {
        return {
            guide
        }
    }
    throw error(404, 'Not found');
}