---
name: KULA BEEF
description: Thai Wagyu from Thung Kula Rong Hai, printed like a two-ink export rice sack.
colors:
  kula-red: "#d6231c"
  kula-red-deep: "#a8150f"
  sack-ink: "#141210"
  woven-sack: "#f9f9f6"
typography:
  display:
    fontFamily: "Archivo, Kanit, Noto Kufi Arabic, Microsoft YaHei, PingFang SC, sans-serif"
    fontSize: "clamp(3.5rem, 9.5vw, 8.75rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Kanit, Noto Kufi Arabic, Microsoft YaHei, PingFang SC, sans-serif"
    fontSize: "clamp(2.2rem, 5.5vw, 4.25rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "'wdth' 125"
  weight-figure:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "'wdth' 125"
  subhead:
    fontFamily: "Archivo, Kanit, Noto Kufi Arabic, Microsoft YaHei, PingFang SC, sans-serif"
    fontSize: "clamp(1.1rem, 2.2vw, 1.55rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.03em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo, Kanit, Noto Kufi Arabic, Microsoft YaHei, PingFang SC, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.2
    fontVariation: "'wdth' 110"
  body:
    fontFamily: "Archivo, Kanit, Noto Kufi Arabic, Microsoft YaHei, PingFang SC, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Kanit, Noto Kufi Arabic, Microsoft YaHei, PingFang SC, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 800
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 115"
rounded:
  none: "0px"
spacing:
  gap: "clamp(1rem, 3vw, 2.25rem)"
  gutter: "clamp(1rem, 3vw, 2.5rem)"
  section: "clamp(2.5rem, 7vw, 6rem)"
  cell: "1rem"
components:
  stamp-primary:
    backgroundColor: "{colors.kula-red}"
    textColor: "{colors.woven-sack}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1rem 1.35rem 0.95rem"
  stamp-primary-hover:
    backgroundColor: "{colors.kula-red-deep}"
  stamp-line:
    backgroundColor: "transparent"
    textColor: "{colors.sack-ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.35rem 0.95rem"
  stamp-line-hover:
    backgroundColor: "{colors.sack-ink}"
    textColor: "{colors.woven-sack}"
  pack-add:
    backgroundColor: "{colors.sack-ink}"
    textColor: "{colors.woven-sack}"
    rounded: "{rounded.none}"
    padding: "0.95rem"
  pack-add-hover:
    backgroundColor: "{colors.kula-red}"
  lang-box:
    backgroundColor: "transparent"
    textColor: "{colors.sack-ink}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.6rem 0.45rem"
  lang-box-active:
    backgroundColor: "{colors.sack-ink}"
    textColor: "{colors.woven-sack}"
  order-tag:
    backgroundColor: "{colors.kula-red}"
    textColor: "{colors.woven-sack}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 4vw, 3.25rem)"
  slip-field:
    backgroundColor: "{colors.woven-sack}"
    textColor: "{colors.sack-ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.75rem"
---

# Design System: KULA BEEF

## Overview

**Creative North Star: "The Thung Kula Export Sack"**

The whole site is one printed sack of the kind Thung Kula rice already ships in: two flexo inks, KULA red and black, laid on white woven polypropylene. There is no third colour and no grey; everything that would normally be a tint is instead carried by the weave texture underneath or by how much ink is laid down (a hairline rule versus a 3px rule versus a solid red block). Lettering is extended heavy grotesk, the way sack printers set product names, and data is set as ruled tabular rows like the spec panel on a sack's side.

Density is generous in the vertical (sections separated by full 3px ink rules) and tight inside the print boxes. Photos are never floated on the ground; they sit in ink-ruled boxes like images printed into a registered frame. The page is stitched shut: a red chain-stitch hem runs under the sticky header and above the bottom edge of the footer.

The site rejects the black-and-gold steakhouse look. It is a working export package, not a restaurant menu.

**Key Characteristics:**
- Two inks only (red, black) on a woven white ground tile (asset/site/weave.png at 16px).
- Archivo at 125% width, weight 900, for every Latin display line; Kanit for Thai, Noto Kufi Arabic for Arabic.
- Square corners everywhere; 3px and 2px solid ink rules do all the structuring.
- Ruled spec rows with red uppercase labels and tabular figures.
- A single reverse-printed red tag (the order slip) is the only large red field.
- Red chain-stitch hem top and bottom.
- Language switch "reprints" the sack: red and black layers land out of register and settle.

## Colors

A strict two-ink flexo palette on an off-white woven ground; depth comes from weave and ink density, never from tints.

### Primary
- **KULA Red** (#d6231c): the brand ink. The cattle mark, origin line, pack weights, spec labels, the primary stamp button, the stitched hem, selection, focus ring, and the reverse-printed order tag field.
- **Deep Press Red** (#a8150f): hover state of red stamps only; reads as the same ink laid heavier.

### Neutral
- **Sack Ink** (#141210): all text, every rule and box border, the pack "Add to order" bar, the active language box.
- **Woven Sack** (#f9f9f6): the ground, always paired with the weave tile; also the reverse colour of type on red and the field colour of inputs on the red tag.

### Named Rules
**The Two Inks Rule.** Only KULA Red and Sack Ink print on the sack. No greys, no opacity tints, no third hue. If something needs to recede, give it a thinner rule or a lighter weight, not a lighter colour.

**The One Red Field Rule.** Red is used for marks, lines and type everywhere, but a full red field appears once per page: the order tag. Buttons count as stamps, not fields.

## Typography

**Display Font:** Archivo variable (wdth 62–125, wght 400–900), with sans-serif fallback
**Body Font:** the same Archivo stack; Kanit under `:lang(th)`, Noto Kufi Arabic under `:lang(ar)`, PingFang SC / Microsoft YaHei for Chinese
**Label Font:** Archivo, extended and uppercase

**Character:** One family, stretched. Heavy extended caps for the sack's printed headline and weights, plain Archivo at normal width for reading. The script-specific faces swap in through `--display` / `--text` per language rather than mixing within one line.

### Hierarchy
- **Display** (900, 125% width, clamp(3.5rem, 9.5vw, 8.75rem), line-height 0.86): the "KULA BEEF" wordmark only, one word per line.
- **Headline** (900, 125% width, uppercase, clamp(2.2rem, 5.5vw, 4.25rem), line-height 1): section titles. Under Thai and Arabic, weight drops to 800 and line-height opens to 1.25 so the scripts are not clipped.
- **Weight Figure** (900, 125% width, clamp(2.4rem, 4vw, 3.4rem)): pack net weights in red, the printed number on each pack.
- **Subhead** (800, 118% width, uppercase, 0.03em): the red origin line under the wordmark.
- **Title** (800, 110% width, 1.25rem): pack names.
- **Body** (400, 1.0625rem, line-height 1.6): running text, held to 46–60ch.
- **Label** (800, 115% width, 0.8rem, 0.06em, uppercase): spec-row keys in red; nav (700, 112%, 0.9rem) and button text (800, 115%, 1rem) follow the same uppercase-extended pattern.

### Named Rules
**The Stretched Caps Rule.** Display and labels in Latin are extended (110–125% width) and uppercase; reading text stays at 100% width, sentence case.

**The Tabular Spec Rule.** Every number that is data (weights, prices, certificate numbers, dates, quantities) uses tabular lining figures.

## Layout

A single centred column capped at 84rem with clamp(1rem, 3vw, 2.5rem) side gutters. Sections stack with clamp(2.5rem, 7vw, 6rem) vertical padding and a full 3px ink rule between each. Inside sections, asymmetric two-column grids (0.9fr/1.1fr, 0.75fr/1.25fr) put a big mark or photo against copy; packs are a 4-up grid that drops to 2 at 68rem and 1 at 30rem. At 52rem every split collapses to one column, the nav hides (language boxes stay), the giant mark shrinks to a 6.5rem stamp at the start, and the CTAs move above the spec panel. Spec rows are a 7.5rem key column plus value, stacking under 30rem.

## Elevation & Depth

Flat. There are no drop shadows anywhere. Depth is printed: the weave tile under the ground, the density of ink (2px rule vs 3px rule vs solid fill), and inset keylines. The only `box-shadow` values are inset keylines that behave like a printed double border.

### Shadow Vocabulary
- **Stamp keyline** (`box-shadow: inset 0 0 0 2px #f9f9f6`): a sack-white line printed inside the red stamp button; on the red tag the stamp inverts to black with an inset red keyline.
- **Tag frame** (`box-shadow: inset 0 0 0 6px #d6231c, inset 0 0 0 8px #f9f9f6`): the thin white frame printed just inside the red order tag.

### Named Rules
**The Printed Depth Rule.** Nothing lifts off the sack. If a surface needs separation, rule it or reverse it.

## Shapes

Square everything: zero radius on buttons, boxes, inputs and the tag. Borders are solid ink at 3px (boxes, section dividers, the pack frame) or 2px (spec rows, language boxes, quantity steppers, figure captions); 1px only for slip line items on the red tag. The recurring silhouettes are the chain-stitch hem (a 16×8 SVG loop repeated in red) and the brand mark, a geometric red cattle glyph drawn as heavy strokes with miter joins.

## Components

### Buttons ("stamps")
Rubber-stamped, uppercase, extended.
- **Shape:** square (0px), 3px border matching the fill.
- **Primary:** KULA Red fill, sack-white text, inset 2px sack keyline, padding 1rem 1.35rem 0.95rem.
- **Hover / Focus:** fill shifts to Deep Press Red over 160ms ease-out; focus is a 3px red outline at 3px offset.
- **Line stamp:** transparent with a 3px black border, black text; hover reverses to a solid black fill.
- **On the red tag:** primary inverts to black fill with a red keyline; line stamp becomes sack-white outline.

### Packs (cards)
- **Corner Style:** square.
- **Background:** woven sack, 3px ink frame, photo boxed by a 3px rule beneath it.
- **Content:** red extended weight figure, title, sub, price pushed to the bottom.
- **Action:** a full-width black "Add to order" bar ruled off at the top; turns red on hover. A selected pack takes a red border plus a 3px red outline and keeps its bar red.

### Spec Panel
Ruled data rows: 2px ink rule above each row and below the panel, red uppercase label key in a 7.5rem column, 600-weight value.

### Inputs / Fields
- **Style:** sack-white fields with no border, square, sitting directly on the red tag; red caret.
- **Error:** 3px black outline (not red, since the ground is red).

### Navigation
Sticky hem header on the woven ground with the stitched red line under it. Nav links are uppercase extended 700, turning red on hover. Language selector is a row of joined 2px-ruled boxes (negative margin so rules overlap); the active language is a solid black box with sack-white text. Under 52rem the nav links hide and only the boxes remain.

### Order Tag (signature)
A reverse-printed red panel (max 60rem, centred) with the inset white frame, extended uppercase headline, slip lines ruled in sack-white, quantity steppers in 2px white boxes that invert on hover, and the inverted stamp pair.

### Reprint (signature motion)
On language switch, every `.print` element animates from slightly offset, 35% opacity and 0.6px blur into register over 620ms `cubic-bezier(0.16, 1, 0.3, 1)`; black layers come in from (5px, -3px), red layers from (-6px, 4px), so the two inks visibly misregister and then settle. Disabled under reduced motion.

## Do's and Don'ts

### Do:
- **Do** lay every surface on the woven sack ground (#f9f9f6 with the weave tile at 16px).
- **Do** frame every photo in a 3px ink-ruled box with zero radius.
- **Do** set Latin display text in Archivo 900 at 125% width, uppercase for section titles.
- **Do** put data in ruled tabular rows with red uppercase keys and tabular figures.
- **Do** keep the red chain-stitch hem at the top and bottom of the page.
- **Do** loosen line-height to 1.25 and drop to 800 for Thai and Arabic headlines.

### Don't:
- **Don't** introduce greys, tints or a third colour; recede with thinner rules or lighter weight instead.
- **Don't** add drop shadows, gradients or rounded corners.
- **Don't** use more than one full red field per page; the order tag owns it.
- **Don't** drift toward the black-and-gold steakhouse look the world was built to refuse.
- **Don't** float photos on the ground without their ink box.
