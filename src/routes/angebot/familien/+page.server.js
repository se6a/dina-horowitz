import {fetchPage} from "$lib/sanity/client";

export async function load() {
    const data = await fetchPage("angebot", "familien");
    return data;
}