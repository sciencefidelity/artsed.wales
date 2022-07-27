import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "lib/sanityClient";
import { Image, NestedHeadings, PortableText } from "lib/interfaces";

export const getHeadings = (blocks: PortableText[]): string[] => {
  const headings: string[] = [];
  blocks.forEach((block) => {
    const { children, style } = block;
    // const { text }: { text: string } = children[0]

    if (style === "h2") {
      headings.push(children[0].text);
    }
  });
  return headings;
};

export const separatePages = (blocks: PortableText[]) => {
  const pages = [];
  let body = [];
  // eslint-disable-next-line unicorn/no-for-loop, no-plusplus
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].style === "h2") {
      if (i !== 0) {
        pages.push(body);
        body = [];
      }
      body.push(blocks[i]);
    } else {
      body.push(blocks[i]);
    }
  }
  pages.push(body);
  return pages;
};

export function kebabCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^\da-z-]/g, "");
}

export const getNestedHeadings = (titles: PortableText[]) => {
  const nestedHeadings: NestedHeadings[] = [];
  titles.forEach((title) => {
    const { children, style } = title;
    // const { text } = children[0]

    if (style === "h2") {
      nestedHeadings.push({
        id: kebabCase(children[0].text),
        title: children[0].text,
        items: [],
      });
    } else if (
      style === "h3" ||
      (style === "h4" && nestedHeadings.length > 0)
    ) {
      nestedHeadings[nestedHeadings.length - 1].items?.push({
        id: kebabCase(children[0].text),
        title: children[0].text,
      });
    }
  });
  return nestedHeadings;
};

export const subdir = (type: string): string => {
  switch (type) {
    case "author":
      return "/author";
    case "post":
      return "/blog";
    case "tag":
      return "/tag";
    default:
      return "";
  }
};

/**
 * Builds a URL to a page relative to the root of the site
 * @remarks Uses the `subdir` function to determine the subdirectory
 * @param type - the document type defined in the Sanity schema
 * @param slug - the slug defined in the document
 * @returns the URL to the page formatted as `subdirectory/slug`
 */
export function buildURL(type: string, slug: string): string {
  return `${subdir(type)}/${slug}`;
}

/**
 * Returns the image url for the given image object
 * @remarks uses `sanityClient` and `imageUrlBuilder` from NPM
 * @param source - the image object
 * @returns the image url
 */
export function urlFor(source: Image) {
  return imageUrlBuilder(sanityClient).image(source);
}
