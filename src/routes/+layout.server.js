import {fetchSite} from "$lib/sanity/client";

export async function load({locals}) {
    const data = await fetchSite();
    return {
        ...data,
        ...locals
    };
}
