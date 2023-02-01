import sanityClient from "@sanity/client";
import {SECRET_DATASET, SECRET_PROJECT_ID} from "$env/static/private";
import {mainNavigation, site, post, page} from "./queries";

export const sanity = sanityClient({
    projectId: SECRET_PROJECT_ID,
    dataset: SECRET_DATASET,
    apiVersion: "2021-10-21",
    useCdn: true
});

export async function fetchSite(lang = "de") {
    try {
        return await sanity.fetch(site, {lang});
    } catch (error) {
        console.error("fetchSite", error);
        return null;
    }
}

export async function fetchPage(route = "", id = "", lang = "de") {
    try {
        if (!id) id = route;
        const pageData = await sanity.fetch(page, {route, id, lang});
        return {pageData};
    } catch (error) {
        console.error("fetchPage", error);
        return null;
    }
}
