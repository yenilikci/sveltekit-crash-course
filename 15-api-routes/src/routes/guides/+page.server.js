import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
    const res = await fetch('/api/guides')
    const guides = await res.json()

    if (res.ok) {
        return {
            guides
        }
    }

    throw error(404, {
        message: 'Not found'
    });
}