import sanityClient from "@sanity/client";
import {page, settings, navigation} from "./queries";

export const sanity = sanityClient({
  projectId: "rd345rul",
  dataset: "production",
  apiVersion: "2022-12-26",
  useCdn: true
});

export async function fetchPage(pageTitle) {
  try {
    return sanity.fetch(page, {pageTitle});
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchSettings() {
  try {
    return sanity.fetch(settings);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchNavigation() {
  try {
    return sanity.fetch(navigation);
  } catch (error) {
    console.error(error);
    return null;
  }
}
