# Barney Jin - Software Engineer Portfolio

A stunning tech-inspired portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This immersive portfolio showcases software engineering projects and professional experience with beautiful animations and modern design.

## ✨ Features

- **Immersive Design**: Full-screen tech-themed interface with stunning visual effects
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Responsive Design**: Optimized for all devices and screen sizes
- **TypeScript**: Fully typed for better development experience
- **Modern Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Auto-deployment**: GitHub Actions workflow for seamless deployment
- **Professional Content**: Showcases real projects from John Deere, EngineeringPeople, and personal work

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build and Deploy

### Local Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy wildlife portfolio"
   git push origin main
   ```

3. **Automatic Deployment**:
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/portfolio-website`

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── WildlifeCard.tsx   # Wildlife display card
│   └── WildlifePortfolio.tsx # Main portfolio component
├── data/                  # Data and content
│   └── portfolio.ts       # Portfolio items data
├── types/                 # TypeScript type definitions
│   └── portfolio.ts       # Portfolio types
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
└── ...config files
```

## 🎨 Customization

### Adding New Portfolio Items

Edit `data/portfolio.ts` to add new project entries:

```typescript
{
  id: '6',
  title: 'PROJECT NAME',
  subtitle: 'Project Type',
  description: 'Detailed project description...',
  category: 'Technology Category',
  stats: [
    { label: 'Metric 1', value: 'Value 1' },
    { label: 'Metric 2', value: 'Value 2' },
    { label: 'Duration', value: 'Time Period' }
  ],
  image: 'https://images.unsplash.com/photo-xxxxx',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  link: 'https://project-demo.com',
  github: 'https://github.com/username/repo'
}
```

### Styling

- Modify `app/globals.css` for global styles
- Update Tailwind classes in components for design changes
- Background image can be changed in `WildlifePortfolio.tsx`
- Contact information is displayed in the first project card

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **GitHub Actions** - CI/CD pipeline

## 📸 Image Credits

Technology and coding images are sourced from [Unsplash](https://unsplash.com) with proper attribution to photographers.

## 👨‍💻 About Barney Jin

- **Education**: MS Computer Science, University of Illinois at Urbana-Champaign (2024-2025)
- **Experience**: Software Engineer at John Deere, Co-founder at EngineeringPeople
- **Specialties**: Full-stack development, mobile apps, enterprise solutions, cloud infrastructure
- **Contact**: peiyuan3@illinois.edu | +1 (317) 316-7876

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

Made with ❤️ by Barney Jin - Software Engineer
