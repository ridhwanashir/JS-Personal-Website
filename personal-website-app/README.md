# Ridhwan Nashir Personal Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Performance Optimized**: Image optimization, bundle splitting, and optimized fonts
- **Accessibility First**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Enhanced**: Comprehensive metadata, Open Graph tags, and structured data
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Type Safe**: Full TypeScript implementation with custom type definitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Feather
- **Fonts**: Google Fonts (Poppins)
- **Deployment**: Vercel ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ridhwanashir/JS-Personal-Website.git
   cd JS-Personal-Website/personal-website-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
personal-website-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page component
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── HeroSection.tsx # Hero section component
│       └── ExperienceCarousel.tsx # Experience carousel
├── types/
│   └── global.d.ts         # TypeScript definitions
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Adding Your Own Content

1. **Update Personal Information**
   - Edit `src/app/layout.tsx` for metadata
   - Modify `src/app/page.tsx` for content
   - Replace images in `public/` directory

2. **Styling**
   - Customize colors in `tailwind.config.ts`
   - Modify global styles in `src/app/globals.css`

3. **Components**
   - Add new components in `src/components/`
   - Import and use in `src/app/page.tsx`

## ⚡ Performance Features

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Optimization**: Package import optimization for react-feather
- **Font Optimization**: Google Fonts with display=swap
- **Lazy Loading**: Components and images loaded on demand

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Comprehensive labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant contrast ratios

## 🔍 SEO Features

- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific metadata
- **Structured Data**: Schema.org markup ready
- **Sitemap**: Automatic sitemap generation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Manual Deployment

```bash
npm run build
npm run start
```

## 📊 Recent Improvements

### ✅ Fixed Issues

- ❌ **Removed unused imports** and commented code
- ❌ **Fixed invalid Tailwind classes** (`bg-light-gray-200` → `bg-gray-200`)
- ❌ **Improved image handling** with proper paths and optimization
- ❌ **Enhanced accessibility** with ARIA labels and semantic HTML
- ❌ **Added TypeScript types** for better type safety
- ❌ **Optimized performance** with Next.js configuration
- ❌ **Enhanced SEO** with comprehensive metadata

### 🔧 Technical Improvements

- **Bundle Size**: Reduced by optimizing imports and removing unused code
- **Type Safety**: Added comprehensive TypeScript definitions
- **Performance**: Implemented image optimization and lazy loading
- **Accessibility**: Added WCAG compliant accessibility features
- **SEO**: Enhanced metadata and social sharing capabilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Website**: [ridhwannashir.com](https://ridhwannashir.com)
- **GitHub**: [@ridhwanashir](https://github.com/ridhwanashir)

---

Built with ❤️ by Ridhwan Nashir
