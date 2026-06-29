# 🎨 Duo Studio — Animated Website Clone

A pixel-faithful, fully animated clone of [Duo Studio](https://duo-studio.co) built with vanilla HTML, CSS, and JavaScript. Features smooth scroll, custom cursor, GSAP scroll animations, and interactive hover effects.

---

## ✨ Features

- **Custom cursor** — follows the mouse, morphs into a video player badge on hover, and previews images on the Mentions section
- **Smooth scrolling** — powered by Locomotive Scroll for buttery-smooth page movement
- **Scroll-triggered animations** — GSAP + ScrollTrigger animates headlines, video width, and background color as you scroll
- **Marquee hover overlay** — hovering Work / Studio / Contact reveals a full-screen purple overlay with an infinitely looping scrolling text ticker
- **Interactive Services section (Page 4)** — hovering each service label slides in images from both sides with a text-slide animation
- **Mentions / Clients section (Page 5)** — each row previews a custom image through the cursor on hover

---

## 🛠️ Tech Stack

| Tool                                                                    | Purpose                                   |
| ----------------------------------------------------------------------- | ----------------------------------------- |
| HTML5                                                                   | Structure                                 |
| CSS3                                                                    | Styling, keyframe animations, transitions |
| JavaScript (Vanilla)                                                    | DOM events, dynamic HTML injection        |
| [GSAP 3](https://greensock.com/gsap/)                                   | Scroll-triggered animations               |
| [ScrollTrigger](https://greensock.com/scrolltrigger/)                   | GSAP scroll plugin                        |
| [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) | Smooth scrolling                          |

---

## 📁 Project Structure

```
duo-studio-clone/
│
├── index.html          # Main HTML — all sections (nav, page1–5, footer)
├── style.css           # All styles — layout, animations, cursor, marquee
├── script.js           # All JS — GSAP timelines, cursor logic, marquee hover
│
└── Videos/
    └── section1-video.mp4   # Hero section background video (local)
```

---

## 🚀 Getting Started

No build tools or package managers needed. Just clone and open.

```bash
git clone https://github.com/your-username/duo-studio-clone.git
cd duo-studio-clone
```

Then open `index.html` in your browser.

> ⚠️ The hero video (`/Videos/section1-video.mp4`) is a local file. Add your own `.mp4` to a `Videos/` folder in the project root, or swap the `src` in `index.html` with any video URL.

---

## 🧠 Key Implementation Notes

### Marquee Hover Effect

When hovering a nav item (Work / Studio / Contact), a purple full-screen overlay fades in and a looping text ticker scrolls left infinitely. This is achieved by:

- Injecting two identical `<span>` copies of the word into a flex container
- Animating `translateX(0)` → `translateX(-50%)` with `linear infinite`
- When the first copy exits left, the second copy is already in its place — creating a seamless loop

### Smooth Scroll + GSAP Integration

Locomotive Scroll and ScrollTrigger are wired together so GSAP's scroll position always syncs with Locomotive's smooth-scrolled position — without this, scroll animations fire at wrong scroll depths.

### Custom Cursor

A single `div.cursor` is positioned with `position: fixed` and updated on every `mousemove` event. It shape-shifts via class toggles and inline style changes depending on what the user is hovering.

---

## 📸 Preview

| Section | Description                                          |
| ------- | ---------------------------------------------------- |
| Page 1  | Hero — animated headline + expanding video on scroll |
| Page 2  | About — white background reveal on scroll            |
| Page 3  | Selected Works — mixed image/video grid              |
| Page 4  | Services — hover-reveal image animation              |
| Page 5  | Mentions — cursor image preview on row hover         |

---

## 🎓 Learning Reference

This project was built as a learning exercise to understand:

- GSAP ScrollTrigger timelines and scrub animations
- CSS `@keyframes` for infinite marquee loops
- Locomotive Scroll + GSAP proxy integration
- CSS `mix-blend-mode: difference` for the nav cursor effect
- Dynamic HTML injection with `innerHTML` for interactive components

---

## 📄 License

This project is a **non-commercial educational clone** of [duo-studio.co](https://duo-studio.co). All design credit belongs to Duo Studio. Not intended for production use or redistribution.

---

## 🙌 Credits

- Original design — [Duo Studio](https://duo-studio.co)
- Scroll library — [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)
- Animation engine — [GSAP by GreenSock](https://greensock.com/gsap/)
- Stock images — [Unsplash](https://unsplash.com)
