import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const res = await fetch(`/api/guides/${params.id}`);
    const guide = await res.json();

    if (res.ok) {
        return {
            guide
        }
    }

    throw error(404, {
        message: 'Not found'
    });
}