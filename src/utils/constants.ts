import { makeAugust } from "@utils/other";

export const MAX_LABEL_LEN = 33;
export const BASE_URL = "";
export const DB_URL_PREFIX = `${BASE_URL}/db/tp.`;

// these consts are just to build the important regexes
const ucsurRanges = "\u{F1900}-\u{F1977}\u{F1978}-\u{F1988}\u{F19A0}-\u{F19A3}";
const symTokens = "+\\-*/()";

export const TERM_DELIMS_RE = new RegExp(
  `\\s+|([${ucsurRanges}${symTokens}])`,
  "u",
);

// wildcard can make up a term, but the other syms cannot
export const TERM_RE = new RegExp(`^[a-z0-9* ${ucsurRanges}]+(?:_\\d)?$`, "u");
export const UCSUR_RE = new RegExp(`^[${ucsurRanges}]$`, "u");

// TODO: fetch from db at init? would make it not so much a constant
export const EARLIEST_YEAR = 2001;
// NOTE: the data goes back to 2010 but there is almost nothing there
// export const EARLIEST_YEAR = 2010;
export const LATEST_YEAR = 2024;

export const EARLIEST_TIMESTAMP = makeAugust(EARLIEST_YEAR).getTime() / 1000;
export const LATEST_TIMESTAMP = makeAugust(LATEST_YEAR).getTime() / 1000;

// start of june 1 in epoch time
// avoids the fact that july is incomplete in my dataset
// no equivalent EARLIEST because i can hand-pick a specific August that is acceptable
export const LATEST_ALLOWED_TIMESTAMP = 1720569600; // 10 jul 2024 -> 7 aug 2024

export const defaultScale = "rel";
export const defaultSmoother = "gauss";
export const defaultSmoothing = "2";
export const defaultField = "hits";

export const LENGTHS = ["1", "2", "3", "4", "5", "6"];
export const SMOOTHINGS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "20",
  "30",
  "40",
  "50",
];

export const FIELDS = {
  hits: { label: "Hits", category: "data", summable: true },
  authors: { label: "Authors", category: "data", summable: false },
  hpa: { label: "Hits/Author", category: "data", summable: false },
};

export const SAMPLE_SEARCHES = [
  "ale, ali, ale + ali",
  "anpa, noka",
  "ante e toki, ante toki e, ante toki - ante toki e",
  "epanja, kanse, tosi",
  "inli - toki inli, epanja - toki epanja",
  "jan ale o, sina ale o, ijo ale o",
  "jan kekan, mun kekan",
  "jan poka, jan olin, jan unpa",
  "kasi, soko",
  "ken suli la, ken mute la",
  "kepeken ilo, kepeken e ilo",
  "kepeken ilo, kepeken nasin",
  "kepeken nasin seme, kepeken seme",
  "kepeken toki pona, e toki pona, lon toki pona",
  "kin la, poka la, sama la",
  "kolona, ukawina",
  "kon jaki, telo jaki",
  "ku, kijetesantakalu, epiku, misikeke",
  "laso, loje, walo, jelo, pimeja",
  "lawa, sewi",
  "lete wawa, seli wawa",
  "li, e, la, pi",
  "lipu tenpo, lipu kule, lipu monsuta",
  "li seme, e seme, la seme",
  "li taso, li wan taso",
  "lon e, kama e",
  "lon seme, ma seme",
  "lukin, oko, lukin + oko",
  "ma losi, ma lusi",
  "ma mesiko, ma mekiko",
  "ma pasila, ma pasiju",
  "meli, mije, tonsi",
  "mije e, meli e, tonsi e",
  "mi musi e musi manka, mi musi manka",
  "mi mute, sina mute, ona mute",
  "mi ni, mi pali e ni",
  "mi, ni, sina, ona",
  "mi tu, mi en sina, sina en mi",
  "mi tu, sina tu, ona tu",
  "mi wan, mi mute, mi ale",
  "moku e ijo, moku e moku",
  "moku e moku, moku e telo",
  "mu, kalama",
  "mute, wawa, sewi",
  "nasin nanpa pona, mute ale mute",
  "ni li tan ni, tan li ni",
  "ni mute, mute ni",
  "noka, anpa",
  "noka, luka",
  "o ni, o pali e ni",
  "o pilin pona, o pilin ike ala",
  "pana sona, pana e sona, pana sona e - pana sona",
  "pilin pona, pilin ike",
  "pi mute ala, pi mute lili",
  "pi toki pona, li toki pona",
  "pona, ike",
  "pona mute, pona suli",
  "pu, ku, su",
  "san - kekan san",
  "selo, sijelo",
  "seme li, seme e, seme la",
  "sewi, anpa",
  "sewi, lawa",
  "sina pona, pona tawa sina, pona o tawa sina",
  "sina seme, sina pilin seme, sina pali e seme",
  "sina wan, sina mute, sina ale",
  "sin, namako",
  "sinpin, monsi",
  "sitelen, pona, sitelen pona",
  "sona e toki, toki e toki, sona toki, toki sona",
  "sona pona, sona wawa",
  "sonja, jan sonja",
  "soweli, waso, kala, akesi, pipi",
  "suno pi toki pona",
  "supa lape, supa - supa lape",
  "tan ni la, tan ni - tan ni la, ni la - tan ni la",
  "tan ni, tawa ni",
  "tenpo ante, tenpo sama",
  "tenpo kama, tenpo pini",
  "tenpo lete, tenpo seli",
  "tenpo monsuta",
  "tenpo ni, tenpo lon",
  "tenpo pana, tenpo santa, tenpo sike sin",
  "tenpo pini, tenpo kama",
  "tenpo suli, tenpo lili",
  "tenpo suno, tenpo pimeja",
  "tenpo wan la, tenpo suno wan la",
  "tenpo weka, tenpo pini",
  "tenpo weka, tenpo poka",
  "toki_1 - toki_2, pona_1 - pona_2",
  "toki epanja, ma epanja",
  "toki inli, ma inli",
  "toki kanse, ma kanse",
  "toki, pona, toki pona",
  "toki sonko, ma sonko",
  "toki tosi, ma tosi",
  "tomo tawa, ilo tawa",
  "wan ale, luka ale, tu ale",
  "wan, tu",
  "wawa a, wawa mute, wawa sewi",
  "weka e sona, weka sona",
  "weka e sona, weka sona e ni, weka sona - weka sona e ni",
  "ni kin li, sona kiwen",
  'o luka e kasi',
];

// absolutes should be preserved
// derivatives are impervious to smoothing
export const SCALES = {
  abs: {
    label: "Absolute",
    category: "simple",
    smoothable: false,
    sums: false,
    axis: "linear",
    axisNums: "int", // truncated by thousands
    tooltipNums: "raw",
  },
  rel: {
    label: "Relative",
    category: "simple",
    smoothable: true,
    sums: false,
    axis: "linear",
    axisNums: "percent", // truncated to 2 significant digits
    tooltipNums: "longPercent", // truncated to 5 significant digits
  },
  cmsum: {
    label: "Cumulative",
    category: "simple",
    smoothable: false,
    sums: true,
    axis: "linear",
    axisNums: "int",
    tooltipNums: "raw",
  },
  logabs: {
    label: "Abs. Log",
    category: "useful",
    smoothable: false,
    sums: false,
    axis: "logarithmic",
    axisNums: "int",
    tooltipNums: "raw",
  },
  logrel: {
    label: "Rel. Log",
    category: "useful",
    smoothable: true,
    sums: false,
    axis: "logarithmic",
    axisNums: "percent",
    tooltipNums: "longPercent",
  },
  logcm: {
    label: "Cml. Log",
    category: "useful",
    smoothable: false,
    sums: true,
    axis: "logarithmic",
    axisNums: "int",
    tooltipNums: "raw",
  },
  normabs: {
    label: "Abs. Minmax",
    category: "useful",
    smoothable: false,
    sums: false,
    axis: "linear",
    axisNums: "raw",
    tooltipNums: "longRaw",
  },
  normrel: {
    label: "Rel. Minmax",
    category: "useful",
    smoothable: true,
    sums: false,
    axis: "linear",
    axisNums: "raw",
    tooltipNums: "longRaw",
  },
  normcm: {
    label: "Cml. Minmax",
    category: "useful",
    smoothable: false,
    sums: true,
    axis: "linear",
    axisNums: "raw",
    tooltipNums: "longRaw",
  },
  entropy: {
    label: "Abs. Entropy",
    category: "weird",
    smoothable: true,
    sums: false,
    axis: "linear",
    axisNums: "raw",
    tooltipNums: "raw",
  },
  relentropy: {
    label: "Rel. Entropy",
    category: "weird",
    smoothable: true,
    sums: false,
    axis: "linear",
    axisNums: "raw",
    tooltipNums: "raw",
  },
  deriv1: {
    label: "Abs. 1st Deriv",
    category: "weird",
    smoothable: false,
    sums: false,
    axis: "linear",
    axisNums: "int",
    tooltipNums: "raw",
  },
  // deriv2: {
  //   label: "2nd Deriv Absolute",
  //   category: "weird",
  //   smoothable: false,
  //   sums: false  ,
  //   axis: "linear",
  //   axisNums: "int",
  //   tooltipNums: "raw",
  // },
  relderiv1: {
    label: "Rel. 1st Deriv",
    category: "weird",
    smoothable: false,
    sums: false,
    axis: "linear",
    axisNums: "percent",
    tooltipNums: "longPercent",
  },
  // relderiv2: {
  //   label: "2nd Deriv Relative",
  //   category: "weird",
  //   smoothable: false,
  //   sums: false  ,
  //   axis: "linear",
  //   axisNums: "percent",
  //   tooltipNums: "longPercent",
  // },
  zscore: {
    label: "Rel. Z-Score",
    category: "weird",
    smoothable: true,
    sums: false,
    axis: "linear",
    axisNums: "raw",
    tooltipNums: "raw",
  },
} as const;

export const SMOOTHERS = {
  cwin: { label: "Window Avg", category: "recommended" },
  gauss: { label: "Gaussian", category: "recommended" },
  exp: { label: "Exponential", category: "weird" },
  med: { label: "Median", category: "weird" },
  tri: { label: "Triangular", category: "weird" },
};
