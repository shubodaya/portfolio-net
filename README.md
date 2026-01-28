# Portfolio Website – Network Engineer

A modern, interactive personal portfolio built to showcase my experience as a **Network Engineer**, combining clean UI design with advanced front-end animations and real-world networking themes.

Built for **network teams, recruiters, and engineering partners**, this portfolio highlights hands-on labs, operational experience, and technical depth in a clear and engaging way.

---

## ✨ Features

- **Hero section with live NOC-style feed**
  - Animated logs simulating real network events
  - KPI cards for uptime, incidents, MTTR, and tickets
- **Infinite scrolling Projects section**
  - Seamless horizontal loop of project tiles
  - Projects repeat continuously with a visual gap between cycles
  - Manual navigation buttons with smooth motion
- **Interactive project cards**
  - Hover tilt and glow effects
  - Correct project numbering that resets on every loop
- **Experience timeline**
  - Auto-advancing carousel with progress indicators
  - Manual navigation support
- **Responsive & accessible**
  - Optimized for desktop and mobile
  - Keyboard-friendly controls
- **Performance-focused**
  - Smooth animations using requestAnimationFrame
  - Minimal re-renders for better performance

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **Framer Motion**
- **CSS (custom, no UI frameworks)**
- **JavaScript (ES6+)**

---

## 📂 Project Structure

```
src/
├── assets/              # Images, icons, backgrounds
├── App.jsx              # Main application logic
├── main.jsx             # App entry point
├── styles.css           # Global and component styles
└── index.html
```

---

## 🔁 Infinite Projects Loop (How it Works)

- Projects are rendered in **two identical cycles**
- A spacer element creates a visible gap between cycles
- Scroll position is wrapped using a calculated loop width
- Ensures:
  - No visual jump
  - No missing first or last tile
  - Correct project numbering on every cycle

This approach allows the Projects section to scroll endlessly while remaining smooth and predictable.

---

## 🚀 Getting Started Locally

```bash
git clone https://github.com/shubodaya/portfolio-net.git
cd portfolio-net
npm install
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 📬 Contact

Built for network teams, recruiters, and engineering partners.

- **Email:** hnshubodaya@gmail.com
- **GitHub:** https://github.com/shubodaya
- **LinkedIn:** https://www.linkedin.com/in/shubodaya/

---

## 📌 Notes

- This project is intentionally framework-light to maintain control over performance and animations.
- Visual elements are inspired by NOC environments, monitoring dashboards, and real-world network operations.
- The codebase prioritizes clarity and maintainability over heavy abstraction.
