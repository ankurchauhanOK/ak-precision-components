Sofia Pro font files

Sofia Pro is wired up in src/app/layout.tsx (next/font/local) from the
sofia-pro-cufonfonts/ directory and mapped to --font-sans in globals.css.
Zodiak (variable) is loaded from zodiak-var.woff2 / zodiak-italic.woff2 and
mapped to --font-display (applied to all h1/h2 via a base rule).

Font roles:
- Zodiak  = headlines / major statements (brand voice)
- Sofia Pro = everything functional (body, nav, buttons, labels)