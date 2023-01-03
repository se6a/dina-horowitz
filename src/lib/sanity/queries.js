export const imageAsset = `
  {
    "src": url,
    "width": metadata.dimensions.width,
    "height": metadata.dimensions.height,
    "aspectRatio": metadata.dimensions.aspectRatio
  }
`;

export const slug = `
  "slug": slug.current
`;

export const imageObject = `
  imageObject {
    caption,
    alt,
    ...src {
      ...asset->${imageAsset},
      hotspot
    }
  }
`;

export const cta = `
  {
    label,
    target,
    target == "page" => pageTarget->{route},
    target == "offer" => offerTarget->{${slug}},
    target == "link" => {url},
    target == "email" => {
      ...* [_type == "settings"][0] {email}
    }
  }
`;

// Sections

export const sectionHero = `
  _type == "sectionHero" => {
    type,
    useCta == true => {cta ${cta}},
    type == "text" => {
      text,
      color
    },
    type == "image" => {
      image {
        ...asset->${imageAsset},
        hotspot
      },
      tagLine
    },
  }
`;

export const sectionButtons = `
  _type == "sectionButtons" => {
    buttons[] ${cta}
  }
`;

export const sectionEversports = `
  _type == "sectionEversports" => {
    url
  }
`;

export const sectionOffers = `
  _type == "sectionOffers" => {
    offers[]->{
      title,
      blocks,
      ${imageObject},
      ${slug}
    }
  }
`;

export const sectionText = `
  _type == "sectionText" => {
    title,
    blocks,
  }
`;

export const sectionImage = `
  _type == "sectionImage" => {
    alt,
    caption,
    ...src {
      ...asset->${imageAsset},
      hotspot
    }
  }
`;

export const sectionContact = `
  _type == "sectionContact" => {
    ...* [_type == "settings"][0] {
      email,
      phoneNumbers
    }
  }
`;

export const sectionAddress = `
  _type == "sectionAddress" => {
    ...* [_type == "settings"][0] {
      ...address{
        company,
        firstName,
        lastName,
        street,
        city,
      }
    }
  }
`;

export const sectionMap = `
  _type == "sectionMap" => {
    ...* [_type == "settings"][0] {
      ...address{
        mapUrl,
        "mapImage": mapImage.asset->{"src": url}
      }
    }
  }
`;

export const sectionSocialMedia = `
  _type == "sectionSocialMedia" => {
    "sectionSocialMedia": * [_type == "settings"][0] {
      ...socialMedia
    }
  }
`;

export const allSections = `
  sections[] {
    _type,
    ${sectionHero},
    ${sectionText},
    ${sectionImage},
    ${sectionButtons},
    ${sectionOffers},
    ${sectionEversports},
    ${sectionContact},
    ${sectionSocialMedia},
    ${sectionAddress},
    ${sectionMap},
  }
`;

//

const offersInNavigation = `
  _type == "pageOffers" => {
    ...sections[_type == "sectionOffers"][0] {
      offers[]->{
        "navName": title,
        "slug": slug.current
      }
    }
  }
`;

//

export const navigation = `
  * [_type in ["pageOffers", "pageAbout", "pageContact", "pageBooking"]] {
    _type,
    pageTitle,
    route,
    sections[hasAnchor == true] {
        "slug": slug.current,
        navName
    },
    ${offersInNavigation}
  }
`;

export const settings = `
  *[_type =="settings"][0]
`;

export const page = `
  *[_type == $pageTitle][0] {
    pageTitle,
    description,
    route,
    pageColor,
    ${allSections}
  }
`;
