import { makeAugust } from "@utils/other";

export const BASE_URL = "/ilo-muni";
export const DB_URL_PREFIX = `${BASE_URL}/db/tp.`;
// export const DB_URL = `https://gregdan3.com/sqlite/2024-08-08-trimmed.sqlite`;

// these consts are just to build the important regexes
const ucsurRanges = "\u{F1900}-\u{F1977}\u{F1978}-\u{F1988}\u{F19A0}-\u{F19A3}";
const symTokens = "+\\-*/()";

export const PHRASE_DELIMS_RE = new RegExp(
  `\\s+|([${ucsurRanges}${symTokens}])`,
  "u",
);

// wildcard can make up a phrase, but the other syms cannot
export const PHRASE_RE = new RegExp(
  `^[a-z0-9* ${ucsurRanges}]+(?:_\\d)?$`,
  "u",
);
export const UCSUR_RE = new RegExp(`^[${ucsurRanges}]$`, "u");

// TODO: fetch from db at init? would make it not so much a constant
export const EARLIEST_YEAR = 2010;
// NOTE: the data goes back to 2010 but there is almost nothing there
// export const EARLIEST_YEAR = 2010;
export const LATEST_YEAR = 2024;

export const EARLIEST_TIMESTAMP = makeAugust(EARLIEST_YEAR).getTime() / 1000;
export const LATEST_TIMESTAMP = makeAugust(LATEST_YEAR).getTime() / 1000;

// start of june 1 in epoch time
// avoids the fact that july is incomplete in my dataset
// no equivalent EARLIEST because i can hand-pick a specific August that is acceptable
export const LATEST_ALLOWED_TIMESTAMP = 1719792000;

export const SAMPLE_SEARCHES = [
  // duh
  "toki, pona, toki pona",
  "sitelen, pona, sitelen pona",
  // phrase trends
  "tomo tawa, ilo tawa",
  "sina seme, sina pilin seme, sina pali e seme",
  // synonyms
  "ale, ali, ale + ali",
  "ala, x, ala + x",
  "anu, y, anu + y",
  // word groups
  "laso, loje, walo, jelo, pimeja",
  "soweli, waso, kala, akesi, pipi",
  "sewi, anpa",
  "sinpin, monsi",
  "meli, mije, tonsi",
  "pu, ku, su",
  "lukin, oko",
  "sin, namako",
  "selo, sijelo",
  // modifier usage
  "wawa a, wawa mute",
  "tenpo ni, tenpo lon",
  "tenpo kama, tenpo pini",
  "tenpo weka, tenpo poka",
  "tenpo suno, tenpo pimeja",
  "tenpo suli, tenpo lili",
  // grammatical things
  "kepeken ilo, kepeken e ilo",
  "kin la, poka la, sama la",
  "pali e, lon e",
  // names
  "jan kekan, mun kekan",
  "epanja, kanse, tosi",
  "sonja, jan sonja",
  "inli, toki inli",
  // disambiguation
  "san - kekan san",
  "inli - toki inli, epanja - toki epanja",
  "toki_1 - toki_2, pona_1 - pona_2",
  // periodic phrases
  "suno pi toki pona",
  "tenpo monsuta",
  "tenpo pana",
  "tenpo lete, tenpo seli",
  // funney
  "sona kiwen",
];

// absolutes should be preserved
// derivatives are impervious to smoothing
export const SCALES = {
  abs: { label: "Absolute", category: "simple", smoothable: false },
  rel: { label: "Relative", category: "simple", smoothable: true },
  cmsum: { label: "Cumulative", category: "simple", smoothable: false },
  logrel: { label: "Relative Log", category: "useful", smoothable: true },
  normrel: { label: "Relative Minmax", category: "useful", smoothable: true },
  normabs: { label: "Absolute Minmax", category: "useful", smoothable: false },
  logabs: {
    label: "Absolute Log",
    category: "weird or dupe",
    smoothable: false,
  },
  relentropy: {
    label: "Relative Entropy",
    category: "weird or dupe",
    smoothable: true,
  },
  entropy: {
    label: "Absolute Entropy",
    category: "weird or dupe",
    smoothable: true,
  },
  zscore: {
    label: "Relative Z-Score",
    category: "weird or dupe",
    smoothable: true,
  },
  deriv1: {
    label: "Absolute 1st Deriv",
    category: "weird or dupe",
    smoothable: false,
  },
  // deriv2: {
  //   label: "2nd Deriv Absolute",
  //   category: "weird or dupe",
  //   smoothable: false,
  // },
  relderiv1: {
    label: "Relative 1st Deriv",
    category: "weird or dupe",
    smoothable: false,
  },
  // relderiv2: {
  //   label: "2nd Deriv Relative",
  //   category: "weird or dupe",
  //   smoothable: false,
  // },
};

export const SMOOTHERS = {
  cwin: { label: "Window Avg", category: "recommended" },
  exp: { label: "Exponential", category: "weird" },
  gauss: { label: "Gaussian", category: "weird" },
  med: { label: "Median", category: "weird" },
  tri: { label: "Triangular", category: "weird" },
};
