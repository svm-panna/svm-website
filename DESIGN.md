---
tokens:
  color:
    primary: "#E87722"          # saffron — CTAs, stat numbers, active indicators, hover accents
    primary_dark: "#C45A00"     # deeper saffron for button hover states
    primary_muted: "#E8772215"  # saffron 8% opacity — card badge backgrounds
    navy: "#1A2B4A"             # footer, dark sections, stats strip, primary text
    navy_light: "#EEF1F6"       # table headers, secondary section backgrounds
    body_text: "#1A2B4A"        # primary text — navy doubles as body for brand cohesion
    secondary_text: "#4A5568"
    muted_text: "#94A3B8"
    bg_white: "#FFFFFF"
    bg_warm: "#F7F3EE"          # warm off-white section alternates (slightly warmer than #F8F9FA)
    bg_light: "#F8F9FA"         # existing light background — keep
    accent_gold: "#C9973A"      # deep gold for trust signals (NAAC badges, ranking numbers)
    border: "#E5E0D8"           # warm border color for cards

  typography:
    font_display: "'DM Serif Display', serif"   # headings only — never below 22px
    font_body: "'Lexend', sans-serif"            # all body, nav, labels

    scale:
      hero_h1_desktop: "clamp(40px, 6vw, 72px)"
      hero_h1_mobile: "clamp(32px, 8vw, 42px)"
      section_h2_desktop: "clamp(32px, 4vw, 48px)"
      section_h2_mobile: "clamp(24px, 6vw, 32px)"
      card_h3: "22px–26px"      # Lexend 600, not DM Serif
      subheading: "17px–19px"   # Lexend 500
      body: "16px"              # Lexend 300–400
      label: "12px–13px"        # Lexend 600, uppercase, letter-spacing 0.8px
      min_display_font: "22px"  # DM Serif Display NEVER below this

  spacing:
    section_py: "80px"          # py-20 = 80px — maintain existing
    card_padding: "28px 24px"
    card_border_radius: "8px"   # tighter than current 16px/2xl for more professional feel

  shadows:
    card: "0 8px 24px rgba(26,43,74,0.12)"
    card_hover: "0 16px 40px rgba(26,43,74,0.18)"
    nav: "0 2px 8px rgba(0,0,0,0.08)"

  borders:
    card_top_accent: "4px solid #E87722"   # saffron top border on card hover
    card_default: "1px solid #E5E0D8"
    section_divider: "1px solid rgba(255,255,255,0.08)"

  animation:
    transition_fast: "0.15s ease"
    transition_default: "0.25s ease"
    transition_slow: "0.4s ease"
---

# SVM Website Design System

## Design Philosophy

**Conversion-first, not prestige-first.** This site's audience arrives from paid ads and counselling forms — they need to be convinced, not impressed by restraint. The design borrows conversion aggression from Manipal (sticky CTAs, urgent application prompts) combined with the visual authority of BITS Pilani (strong overlay hero, clear program hierarchy) and UCL's program differentiation patterns.

Avoid IIT-style prestige design (no visible urgency, no Why-Us copy, assumes audience already wants to come). SVM's Tier-3 audience needs clear wayfinding, visible contact numbers, and friction-reduced paths to apply.

---

## Hero Section

**Pattern:** Full-bleed actual campus photograph (not stock) with dark diagonal gradient overlay. White heading text in DM Serif Display. English headline dominant, Hindi sub-headline below.

**Overlay:**
```css
background: linear-gradient(
  135deg,
  rgba(26, 43, 74, 0.72) 0%,
  rgba(26, 43, 74, 0.40) 60%,
  rgba(0, 0, 0, 0.15) 100%
);
```
The gradient direction allows bottom-right of image to remain photographic while the text area has sufficient contrast. Never use a flat uniform overlay — it destroys the photo's energy.

**Heading:**
```css
font-family: 'DM Serif Display', serif;
font-size: clamp(40px, 6vw, 72px);
color: #ffffff;
line-height: 1.15;
max-width: 680px;
```

**Sub-headline:**
```css
font-family: 'Lexend', sans-serif;
font-size: clamp(16px, 2vw, 20px);
color: rgba(255, 255, 255, 0.88);
font-weight: 300;
margin-top: 12px;
```

**Source:** Stanford 64px white hero, UCL 52px dark-overlay hero, BITS Pilani directional gradient.

---

## Navigation

### Sticky Apply Button
A distinctly colored pill button in the top-right of the sticky nav bar, visible on all pages and on scroll:
```css
.nav-apply-btn {
  background: #E87722;
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 15px;
}
```
**Source:** Georgia Tech (contrast-color apply button in nav), Manipal (persistent orange apply pill).

### Announcement Bar (Admission Season)
Full-width saffron bar above the topbar, for admission urgency. Toggle on/off seasonally:
```css
.deadline-bar {
  background: #E87722;
  color: #ffffff;
  text-align: center;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
}
```
**Source:** Manipal campaign pages, upGrad urgency patterns.

---

## Stats Strip

Navy background, saffron numbers, 4 columns. Top accent line in saffron:

```css
.stats-strip {
  background: #1A2B4A;
  padding: 28px 0;
  border-top: 4px solid #E87722;
}
.stat-number {
  font-family: 'DM Serif Display', serif;
  font-size: 42px;
  color: #E87722;
  line-height: 1;
}
.stat-label {
  font-family: 'Lexend', sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-top: 4px;
}
```

Recommended stats: Est. year / NCTE Recognized / Total programs / Students enrolled.

**Source:** IIT Bombay counter strip, Amity alumni counter, Manipal placement stats.

---

## Quick Links Strip (Ad Traffic Orientation)

A 5-item horizontal strip directly below the hero/stats. For users arriving from ads who have intent but need immediate wayfinding. This is Amity's most effective conversion pattern.

Items: Courses | Admission Process | Fee & Scholarship | Contact Counsellor | Distance Learning

```css
.quick-links-strip {
  background: #F7F3EE;   /* warm off-white */
  border-bottom: 1px solid #E8DDD0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  gap: 48px;
}
.quick-link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: 'Lexend', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #1A2B4A;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.quick-link-icon {
  width: 48px;
  height: 48px;
  background: #E87722;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Source:** Amity University quick links strip — single most effective conversion pattern for Tier-2/3 Indian college sites.

---

## Program Cards

Cards in a responsive 3-column grid. Saffron top-border on hover. Mode badge differentiates campus vs distance:

```css
.program-card {
  background: #ffffff;
  border: 1px solid #E5E0D8;
  border-radius: 8px;
  padding: 28px 24px;
  border-top: 4px solid transparent;
  transition: border-top-color 0.25s, box-shadow 0.25s;
}
.program-card:hover {
  border-top-color: #E87722;
  box-shadow: 0 8px 24px rgba(26, 43, 74, 0.12);
}
```

### Mode Badges
```css
.mode-badge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 20px;
}
.mode-badge.campus {
  background: #E8772220;
  color: #C45A00;
}
.mode-badge.distance {
  background: #1A2B4A20;
  color: #1A2B4A;
}
```

**Program name sizes:** h3 at minimum 22px Lexend 600 (not DM Serif, too heavy for small cards). Full program name below at 16px Lexend 400 gray.

**Source:** UCL programme cards, BITS Pilani program mode separation, Georgia Tech card grid.

---

## Campus vs Distance Differentiation

**Recommended pattern:** Filter bar + card grid (UCL model). Single `/courses` page with a tab filter:

```
All Programs | Regular Campus | Distance Learning
```

Tabs in navy text, active tab gets saffron bottom border. This maintains a single URL for SEO while clearly differentiating audiences.

Additionally, build dedicated landing pages for paid ad traffic:
- `/admissions` — campus programs funnel
- `/distance-learning` — distance programs funnel (already exists)

These dedicated pages should have no distracting full nav — a minimal sticky nav with phone number and Apply CTA only.

**Navigation label:** "Regular Programs" for campus (not "On-Campus" or "Offline") — cleaner, more aspirational. "Distance Learning" for the other (not "Online" which implies live video classes — distance mode is asynchronous).

**Source:** UCL study-mode filter, BITS Pilani mega-menu separation, Amity two-site approach (simplified).

---

## Typography Hierarchy

| Level | Font | Desktop Size | Mobile Size | Weight |
|---|---|---|---|---|
| Hero H1 | DM Serif Display | 64–72px | 36–42px | 400 |
| Section H2 | DM Serif Display | 40–48px | 28–32px | 400 |
| Card H3 | Lexend | 22–26px | 18–20px | 600 |
| Subheading | Lexend | 17–19px | 15–16px | 500 |
| Body | Lexend | 16px | 15px | 400 |
| Body secondary | Lexend | 15px | 14px | 300 |
| Label/Tag | Lexend | 12–13px | 12px | 600 uppercase |

**Critical rule:** DM Serif Display is reserved for H1 and H2 only. It must never appear below 22px. All smaller headings (H3, H4) use Lexend 600.

**Bilingual hierarchy:** English headline dominant at full size. Hindi equivalent at 75% scale below, or in a muted subheading position. Never equal-size stacked bilingual headings — the visual weight collision creates hierarchy confusion.

**Source:** MIT Freight Display 72px hero, UCL 52px serif, Stanford 64px display, IIT Bombay ~48–56px white heading.

---

## Color Usage Rules

**Saffron #E87722 appears ONLY on:**
- Primary CTA buttons (Apply Now, Counselling Form)
- Stat numbers
- Active nav indicator
- Card hover top border
- Small accent dots/lines
- Deadline announcement bar background

**Saffron must NOT appear as:**
- Large section backgrounds (it becomes overwhelming and loses CTA-signal value)
- Text on white backgrounds (accessibility contrast failure at small sizes)
- More than ~15% of any given page's visual surface

**Navy #1A2B4A appears on:**
- Footer, dark sections, stats strip
- Primary body text
- Table headers
- Dark hero/page hero gradient source

**Warm off-white #F7F3EE** replaces pure gray (#F8F9FA) as section alternating background — warmer and more welcoming for an education brand in the saffron/navy palette.

**Source:** Stanford Cardinal Red usage discipline (red at <10% surface), IIT Bombay color restraint, Manipal orange consistency.

---

## Mobile Patterns

- Hero: Maintain overlay on mobile with portrait image crop. Never stack text below image (breaks urgency).
- Stats strip: 2×2 grid on mobile (not horizontal scroll).
- Program cards: Single column on mobile, min tap target 48px height for CTA.
- Nav: Hamburger menu. "Apply Now" button stays visible outside hamburger at all times (top-right, always rendered).
- Quick links: 3-column grid on mobile (2 rows of 3, or hide 2 least important).

---

## What to Avoid

- **Gradient mesh backgrounds** (purple-to-blue blobs) — low-credibility EdTech aesthetic
- **Stock photography** of diverse students clearly not on your campus — destroys local trust
- **Glassmorphism cards** — dated 2022 template signal
- **Saffron as large section background** — loses CTA signal value through repetition  
- **More than 2 font families** — Lexend + DM Serif Display is the maximum
- **Auto-rotating testimonial carousels** — unreadable, users have tuned them out
- **6+ CTAs above the fold** — Amity anti-pattern, creates decision paralysis
- **Marquee/ticker news strips** — inaccessible, ignored by users
- **IIT-style "no urgency" design** — SVM's audience needs conversion triggers IIT does not

---

## Conversion Funnel Architecture

For ad → application flow:

1. **Ad** (Google/Meta) → 
2. **Landing page** (`/admissions` or `/distance-learning`) with: single hero, counsellor phone number visible, 3 CTAs max, deadline if applicable →
3. **Application form** (Google Form or inline) OR
4. **Counselling form** (existing Google Form link) as intermediate step for hesitant users

The counselling form link should appear in: hero CTA strip, admissions page, distance-learning page, and sticky/floating on mobile as a secondary CTA ("Talk to a Counsellor").

**Source:** Manipal conversion funnel design, upGrad campaign page architecture.
