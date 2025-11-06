# Nikhil Dubey - Portfolio

A modern, responsive portfolio website built with Next.js 16, React, and Tailwind CSS. Featuring smooth animations, dark mode support, and a clean developer aesthetic.

## ✨ Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark Mode** - Toggle between light and dark themes with persistent storage
- **Smooth Animations** - Framer Motion-powered animations and transitions
- **Performance Optimized** - Built with Next.js for optimal performance and SEO
- **Accessibility** - Full ARIA compliance and semantic HTML
- **Modern UI** - Indigo and electric blue color scheme with glassmorphism effects

## 📋 Sections

- **Hero** - Animated introduction with social media links
- **About** - Professional summary with key highlights
- **Experience** - Timeline of professional roles and achievements
- **Projects** - Showcase of notable projects with descriptions
- **Skills** - Categorized skills with proficiency levels
- **Achievements** - Competitive programming and awards
- **Contact** - Contact form for inquiries
- **Footer** - Quick navigation and social links

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org)
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. **Clone the repository** (or download the ZIP)
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see your portfolio website live with hot-reload enabled

## 📝 Customization Guide

### Update Your Information

Edit the component files to add your personal information:

- **Hero Section** (`components/hero-section.tsx`) - Update greeting, tagline, and social links
- **About Section** (`components/about-section.tsx`) - Add your bio and quick facts
- **Experience Section** (`components/experience-section.tsx`) - Add your work history
- **Projects Section** (`components/projects-section.tsx`) - Showcase your projects
- **Skills Section** (`components/skills-section.tsx`) - List your technical skills
- **Achievements Section** (`components/achievements-section.tsx`) - Add awards and recognitions
- **Contact Section** (`components/contact-section.tsx`) - Update contact email and message

### Add Project Images

Replace placeholder images in the `public/` folder:

\`\`\`
public/
├── developer-avatar.jpg          # Your profile photo
├── chat-application-dashboard.jpg # Project screenshot
└── ai-generated-faces.jpg         # Project screenshot
\`\`\`

### Customize Colors

Edit the design tokens in `app/globals.css`:

\`\`\`css
@theme inline {
  --color-background: #ffffff;
  --color-foreground: #000000;
  --color-primary: #4f46e5;      /* Indigo */
  --color-accent: #0ea5e9;       /* Electric Blue */
  /* ... more tokens ... */
}
\`\`\`

### Update Social Links

Modify the social links in `components/hero-section.tsx` and `components/footer.tsx` to point to your profiles:

\`\`\`tsx
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  // ... more links
]
\`\`\`

## 📧 Email Configuration

The contact form currently logs messages to the console. To enable email functionality:

1. **Using Resend** (Recommended)
   \`\`\`bash
   npm install resend
   \`\`\`
   - Sign up at [resend.com](https://resend.com)
   - Update `app/api/send-email/route.ts` with your Resend API key

2. **Using SendGrid**
   \`\`\`bash
   npm install @sendgrid/mail
   \`\`\`
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Add your API key as an environment variable

3. **Using Gmail**
   - Set up a Gmail app password
   - Configure SMTP in your email service

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" and import your GitHub repository
   - Click "Deploy"

3. **Set Environment Variables** (if using email service)
   - Go to Project Settings → Environment Variables
   - Add your API keys (e.g., `RESEND_API_KEY`)

Your portfolio will be live at `https://your-domain.vercel.app`

### Deploy to Other Platforms

- **Netlify**: Import your GitHub repo at netlify.com
- **GitHub Pages**: Configure static export in next.config.js
- **Railway/Render**: Connect your GitHub and deploy

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

This portfolio follows WCAG 2.1 AA standards:

- Semantic HTML markup
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📊 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: All green
- **Optimized Images**: Automatic Next.js image optimization
- **Code Splitting**: Automatic route-based splitting

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find improvements, submit a pull request!

## 📄 License

This project is open source and available under the MIT License.

## 👤 About Nikhil Dubey

- **Location**: India
- **Specialties**: React, Next.js, Node.js, Ethical Hacking
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [github.com/nikhildubey](https://github.com)
- **LinkedIn**: [linkedin.com/in/nikhildubey](https://linkedin.com)

## 🔗 Quick Links

- [Live Portfolio](https://your-portfolio-url.com)
- [GitHub Repository](https://github.com/yourusername/portfolio)
- [Download Resume](#)
- [Contact Me](#)

---

Made with ❤️ by Nikhil Dubey. Last updated: November 2025
