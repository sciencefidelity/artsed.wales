import {
  acronym,
  capitalize,
  joinName,
  keyStage,
  localize,
  localizeRoles,
  pattern,
} from "../utils";
import p from "../styles/patterns.module.scss";
import { LocaleString } from "../interfaces";

test("The acronym of National Arts and Education Network is 'NAEN'", () => {
  expect(acronym("National Arts and Education Network")).toBe("NAEN");
});

test("The first lettter of each word should be uppercase", () => {
  expect(capitalize("every green bus drives fast")).toBe(
    "Every Green Bus Drives Fast"
  );
});

test("John Smith becomes John&nbsp;Smith", () => {
  expect(joinName("John Smith")).toBe("John&nbsp;Smith");
});

test("Shortens Key Stage 2 to KS2.", () => {
  expect(keyStage("Key Stage 2")).toBe("KS2");
});

const localizedGreeting: LocaleString = {
  cy: "Helo Byd",
  en: "Hello World",
};

test("returns the lines property for an unknown value", () => {
  expect(localize(localizedGreeting, "cy")).toBe("Helo Byd");
});

test("returns the lines property for an unknown value", () => {
  expect(localize(localizedGreeting, "en")).toBe("Hello World");
});

test("Converts a job role into Welsh", () => {
  expect(localizeRoles("Author")).toBe("Awdur");
});

test("Returns an empty string for an unknown role", () => {
  expect(localizeRoles("Teacher")).toBe("");
});

test("returns the cubes property from the patterns scss module", () => {
  expect(pattern("cubes")).toBe(p.cubes);
});

test("returns the lines property for an unknown value", () => {
  expect(pattern("foo")).toBe(p.lines);
});
