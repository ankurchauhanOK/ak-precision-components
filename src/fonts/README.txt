Sofia Pro font files

Place your licensed Sofia Pro .woff2 files here (e.g. Regular, Medium, Semibold):

  SofiaPro-Regular.woff2
  SofiaPro-Medium.woff2
  SofiaPro-Semibold.woff2

Then wire them up in src/app/layout.tsx with next/font/local and point
--font-sans to the new variable (see the existing Zodiak setup in the same file).
Currently --font-sans falls back to Geist until the files are added.