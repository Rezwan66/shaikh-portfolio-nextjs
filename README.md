# Shaikh Rezwan — Portfolio

A modern, professional portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Featuring a sleek dark theme with glassmorphism effects, animated skill bars, and dynamic project detail pages.

🔗 **Live Site:** [shaikh-portfolio-nextjs.vercel.app](https://shaikh-portfolio-nextjs.vercel.app)

## ✨ Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile
- **Dark Theme** — Modern blue/cyan/violet palette with glassmorphism cards
- **Smooth Animations** — Scroll-triggered reveals, type animation, and floating effects
- **Dynamic Project Pages** — Individual detail pages for each project with tech stack, challenges, and improvements
- **Skills Visualization** — Animated progress bars organized by category
- **Experience Timeline** — Interactive timeline with gradient accents
- **Contact Form** — Integrated with Resend API for email delivery
- **SEO Optimized** — Proper meta tags, OpenGraph data, and semantic HTML

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS 3, Custom CSS |
| **Animation** | Framer Motion, React Type Animation |
| **Icons** | Heroicons, Inline SVGs |
| **Email** | Resend API |
| **Fonts** | Inter, Space Grotesk (Google Fonts) |
| **Deployment** | Vercel |

## 📁 Project Structure

```
src/app/
├── page.js                    # Main landing page
├── layout.js                  # Root layout with fonts & metadata
├── globals.css                # Design system & utilities
├── projects/[id]/page.jsx     # Dynamic project detail pages
├── api/send/route.js          # Contact form API endpoint
├── data/projectsData.js       # Centralized project data
├── styles/componentStyles.css # Timeline & animation styles
└── components/
    ├── Navbar.jsx              # Glassmorphism navigation bar
    ├── HeroSection.jsx         # Hero with type animation & socials
    ├── AchievementsSection.jsx # Animated number stats
    ├── AboutSection.jsx        # Personal introduction & hobbies
    ├── SkillsSection.jsx       # Categorized skill progress bars
    ├── ExperienceSection.jsx   # Timeline-based work experience
    ├── EducationSection.jsx    # Education cards
    ├── ProjectsSection.jsx     # Filterable project grid
    ├── ProjectCard.jsx         # Individual project card
    ├── EmailSection.jsx        # Contact info & form
    ├── Footer.jsx              # Three-column footer
    └── SectionHeading.jsx      # Reusable section title
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Environment Variables

Create a `.env.local` file with:

```
RESEND_API_KEY=your_resend_api_key
```

## 📝 License

© 2026 Shaikh Rezwan. All rights reserved.
