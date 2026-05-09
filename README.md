# KANDULA VINAY GUPTA — Personal Portfolio

A modern, fully responsive, animated personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌐 Live Demo

**Visit your portfolio online:**  
[https://portfolio-git-main-vinay-gupta-kandula-projects.vercel.app](https://portfolio-git-main-vinay-gupta-kandula-projects.vercel.app)

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach with perfect scaling from mobile (375px) to desktop (1280px+)
- **Smooth Animations**: Production-quality animations using Framer Motion
- **Parallax Scrolling**: Engaging parallax background effects
- **On-Scroll Animations**: Multiple section reveal animations triggered by scroll
- **Accessibility First**: Respects `prefers-reduced-motion` for users who prefer minimal animations
- **Modern Dark Theme**: Elegant dark mode with cyan-to-indigo gradients
- **Performance Optimized**: Built for Lighthouse scores (90+)
- **SEO Ready**: Proper meta tags, semantic HTML, and structured content
- **Component-Based Architecture**: Clean, reusable React components

## 📋 Sections

1. **Hero** - Name, role, introduction, CTA buttons, parallax background
2. **About** - Professional bio and focus areas
3. **Skills** - Categorized technical skills with icons
4. **Projects** - Featured projects with descriptions, tech stacks, and links
5. **Experience** - Timeline of achievements and milestones
6. **Contact** - Contact information and message form
7. **Footer** - Quick links and scroll-to-top button

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel / Netlify

## 📦 Installation

1. **Clone the repository**
```bash
# Replace with your repository URL after you push this project to GitHub
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗 Building for Production

```bash
npm run build
npm run preview
```

The `dist` folder will contain your production-ready build.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## ✨ Customization

### Update Your Information

Edit `src/data/projects.js` to add your projects:
```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/...',
    demo: '#'
  }
]
```

### Update Contact Links

In `src/components/Contact.jsx`, update the email, GitHub, and LinkedIn links.

### Customize Colors

Edit the Tailwind config in `tailwind.config.cjs` to change the color scheme.

### Update Resume

Replace the resume link in `src/components/Navbar.jsx` and `src/components/Hero.jsx` with your actual resume PDF.

### Replace Avatar

Replace `src/assets/avatar.svg` with your own avatar image.

## Personal Details

- Name: Kandula Vinay Gupta
- Role: Data Scientist | Data Analyst
- Email: kvinaygupta4242@gmail.com

## ⭐ Featured Projects (recommended order)

Use the following validated projects as your featured portfolio entries:

- AI-Powered Sales Anomaly Detector (Score: 100)
  - Repo: https://github.com/vinay-gupta-kandula/ai-sales-anomaly-detector
  - Tech: Python, Streamlit, Plotly, Scikit-learn

- Production-Ready LLM Fine-Tuning Pipeline with LoRA (Score: 89)
  - Repo: https://github.com/vinay-gupta-kandula/production-ready-llm-lora
  - Tech: PyTorch, Transformers, LoRA, Hugging Face

- Production A/B Testing Framework for ML Models (Score: 100)
  - Repo: https://github.com/vinay-gupta-kandula/ml-ab-testing-framework
  - Tech: Python, MLflow, DVC, Docker

- Reusable A/B Testing Analysis Framework (Score: 95)
  - Repo: https://github.com/vinay-gupta-kandula/ab-testing-framework-python
  - Tech: Python, Pandas, Scikit-learn

Replace the demo and links in `src/data/projects.js` with screenshots or live demo URLs as available.

## 📱 Responsive Breakpoints

- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1280px (Desktop)

All sections are tested and optimized for these breakpoints.

## ♿ Accessibility

This portfolio respects user accessibility preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are disabled */
}
```

Users who enable "Reduce Motion" in their OS will have animations disabled automatically.

## 🎯 Performance Targets

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 90+
- **Lighthouse Best Practices**: 90+
- **Lighthouse SEO**: 85+

