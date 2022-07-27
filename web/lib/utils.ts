import imageUrlBuilder from "@sanity/image-url";
import { Image, LocaleString, Staff } from "lib/interfaces";
import p from "styles/patterns.module.scss";
import sanityClient from "./sanityClient";

/**
 * Converts a title or company name to an acronym
 * @remarks Generates all pages in the subdirectory `/staff`
 * @param str - the name of the company
 * @returns the acronym in capital letters
 */
export function acronym(str: string): string {
  return str
    .split(" ")
    .map((e) => (/[A-Z]/.test(e) ? e[0] : ""))
    .join("");
}

/**
 * Capitalizes a string
 * @remarks changes the first letter of each word to uppercase
 * @param str - a string
 * @returns the capitalized string
 */
export function capitalize(str: string): string {
  return str
    .split(/[\s-]/g)
    .map((e) => e.replace(e[0], e[0].toUpperCase()))
    .join(" ");
}

/**
 * Adds a non-breaking space to a name
 * @remarks replaces spaces with non-breaking spaces prevents string from breaking
 * @param name - a name as a string
 * @returns the string with non-breaking spaces
 */
export function joinName(name: string) {
  return name.split(" ").join("&nbsp;");
}

/**
 * Takes the word Key Stage 3 and returns KS3
 * @remarks creates a shortened version of the key stage
 * @param str - one of the key stages defined in the Sanity database
 * @returns the shortened version of the key stage
 */
export function keyStage(str: string): string {
  return str
    .split(" ")
    .map((e) => e.replace(e, e[0]))
    .join("");
}

/**
 * Localizes a Sanity string definded by the {@link LocaleString} interface
 * @remarks returns the localized string
 * @param content - the LocaleString object
 * @param locale - the current locale
 * @returns the localized string
 */
export function localize(content: LocaleString, locale: string): string {
  return locale === "cy" && content.cy ? content.cy : content.en;
}

/**
 * Returns the Welsh translation a predefined staff role
 * @remarks localizes a staff role
 * @param type - a staff role as a string defined in the Sanity database
 * @returns the Welsh translation of the staff role
 */
export const localizeRoles = (type: string): string => {
  switch (type) {
    case "Author":
      return "Awdur";
    case "Chair":
      return "Cadeirydd";
    case "Co-ordinator":
      return "Cydlynydd";
    case "Facilitator":
      return "Hwylusydd";
    case "Trustee":
      return "Ymddiriedolwr";
    default:
      return "";
  }
};

/**
 * Returns the class name used to define a background pattern
 * @remarks uses patterns defined in `styles/patterns.module.scss`
 * @param patt - a string defining the pattern in the Sanity database
 * @returns the class name
 */
export function pattern(patt: string): string {
  switch (patt) {
    case "cubes":
      return p.cubes;
    case "lines":
      return p.lines;
    case "dots":
      return p.dots;
    case "circles":
      return p.circles;
    case "linesVertical":
      return p.linesVertical;
    case "squares":
      return p.squares;
    case "linesDiagonal":
      return p.linesDiagonal;
    case "diagonal":
      return p.diagonal;
    case "textbook":
      return p.textbook;
    case "target":
      return p.target;
    case "repeatingCircles":
      return p.repeatingCircles;
    case "radial":
      return p.radial;
    case "zigzag":
      return p.zigzag;
    case "isometric":
      return p.isometric;
    case "isometric3d":
      return p.isometric3d;
    case "cross":
      return p.cross;
    default:
      return p.lines;
  }
}

/**
 * Sorts the names of the staff members by their last name
 * @remarks used in the `/about` page
 * @param names - an array of staff documents from the Sanity database
 * @returns the sorted array of staff members
 */
export function sortNames(names: Staff[]): Staff[] {
  return [...names].sort((a, b) => {
    const nameA = a.title.split(" ").pop();
    const nameB = b.title.split(" ").pop();
    if (nameA && nameB) {
      return nameA.localeCompare(nameB);
    }
    return 0;
  });
}

/**
 * Returns the subdirectory of the site based on the schema type
 * @remarks works alongside the `buildURL` function
 * @param type - the document type defined in the Sanity schema
 * @returns the subdirectory used in the site
 */
export function subdir(type: string): string {
  switch (type) {
    case "artform":
      return "/artform";
    case "event":
      return "/event";
    case "keystage":
      return "/keystage";
    case "post":
      return "/news";
    case "staff":
      return "/staff";
    case "tag":
      return "/tag";
    case "video":
      return "/video";
    default:
      return "";
  }
}

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
