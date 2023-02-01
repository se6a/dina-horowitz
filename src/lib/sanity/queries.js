function crntLang(prop, rename = "") {
    return `"${rename || prop}": ${prop}[$lang]`;
}

/* PARTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const image = `
    ...asset->{
        "src": url,
        "width": metadata.dimensions.width,
        "height": metadata.dimensions.height,
        "aspectRatio": metadata.dimensions.aspectRatio,
    },
    alt,
    caption,
    hotspot
`;

/* SECTION CONTENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const scText = `
_type == "scText" => {
    "blocks": richtext[$lang],
    hasBackground, 
}
`;

const scCollapsibleText = `
_type == "scCollapsibleText" => {
    title,
    "blocks": richtext[$lang],
   
}
`;

const scImage = `
_type == "scImage" => {
    "image": image_ {${image}}
}
`;

const sectionContents = `
    _type,
    column,
    ${scText},
    ${scImage},
    ${scCollapsibleText}
`;

/* QUERIES
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const page = `
* [_type == $route && _id == $id][0] {

    title,
    ${crntLang("metaTitle")},
    ${crntLang("metaDescription")},

    "sections": sections.list[] {
        title,
        navigationName,
        content[] {
            ${sectionContents}
        }
    },

    _type == "start" => {
        display,
    },
  

}
`;

export const site = `
{
    "siteNavigation": [
        * [_type == "angebot" && _id == "familien"][0] {
            title,
            ${crntLang("metaDescription")},
            "id": _id
        },
         * [_type == "angebot" && _id == "fachpersonen"][0] {
            title,
            ${crntLang("metaDescription")},
            "id": _id
        },
        * [_type == "angebot" && _id == "alle"][0] {
            title,
            ${crntLang("metaDescription")},
            "id": _id
        },
    ]
}
`;
