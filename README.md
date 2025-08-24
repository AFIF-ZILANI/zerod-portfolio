# ZeroD Portfolio 🚀

<div align="center">
  <img src="./public/images/hero.png" alt="ZeroD Logo" width="200" height="120" />
  
  <p><em>Transform Your Digital Ideas into Reality</em></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Bun](https://img.shields.io/badge/Bun-Runtime-000?logo=bun&logoColor=white)](https://bun.sh/)
</div>

## 🌟 About

**ZeroD Portfolio** is a modern, responsive portfolio website showcasing our company's expertise in web development and digital solutions. Built with cutting-edge technologies, it demonstrates our commitment to innovation and quality in every project we undertake.

### 🎯 Our Mission
To turn bold ideas into reality through innovation, creativity, and technology. Starting with software and web development, we build scalable, user-friendly, and impactful solutions that empower individuals, businesses, and communities.

### 🔮 Our Vision
To become the largest company in the galaxy — a true parent company leading multiple child companies across industries, from IT and AI to hardware, agriculture, and beyond.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🌓 Dark/Light Theme**: Toggle between themes with seamless transitions
- **⚡ Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast performance
- **🎬 Interactive Animations**: Powered by Framer Motion for engaging user experience
- **🎥 Video Background**: Dynamic hero section with background videos
- **🌍 3D Globe**: Interactive globe component using Cobe
- **📝 Contact Form**: Functional contact form with validation
- **🎪 Particle Effects**: Dynamic particle system using TSParticles
- **🎭 Typewriter Effects**: Animated text generation
- **📊 SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 15.5.0](https://nextjs.org/) with App Router
- **Runtime**: [Bun](https://bun.sh/) for fast package management and execution
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling

### UI & Animation Libraries
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/) primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **3D Effects**: [Cobe](https://cobe.vercel.app/) for interactive globe
- **Particles**: [TSParticles](https://particles.js.org/) for particle effects
- **Icons**: [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Code Formatting**: Prettier for consistent code style
- **Theme Management**: next-themes for dark/light mode
- **Build Tool**: Turbopack for faster development builds

## 📁 Project Structure

```
zerod-portfolio/
├── public/
│   ├── fonts/           # Custom fonts (Aclonica)
│   ├── images/          # Static images and assets
│   └── videos/          # Background videos
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles and CSS variables
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Homepage component
│   ├── assets/
│   │   └── icons/       # Custom icon components
│   ├── components/
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   └── providers/
│       └── theme-provider.tsx # Theme context provider
├── components.json      # shadcn/ui configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/zerod-portfolio.git
   cd zerod-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using Bun
   bun dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
# Development server with Turbopack
bun dev

# Build for production with Turbopack
bun run build

# Start production server
bun start

# Run linting
bun run lint
```

## 🎨 Customization

### Styling
- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Update UI components in `src/components/ui/`
- **Fonts**: Custom fonts are loaded from `public/fonts/`

### Content
- **Hero Section**: Edit `src/components/sections/hero.tsx`
- **About Section**: Modify `src/components/sections/About.tsx`
- **Services**: Update services in `src/components/sections/services.tsx`
- **Founders**: Edit founder profiles in `src/components/sections/founders.tsx`

### Theme
The website supports both dark and light themes. Theme switching is handled by `next-themes` with the provider in `src/providers/theme-provider.tsx`.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify
- Digital Ocean App Platform

## 👥 Team

### Founders

**Tauhid Rana** - Co-Founder & Frontend Developer
- 🌐 [GitHub](https://github.com/Tauhidrana)
- 📘 [Facebook](https://www.facebook.com/tauhid.rana.00)
- 📷 [Instagram](https://www.instagram.com/tauhid.rana.52)
- ⭐ Specializes in Frontend Web Development

**AFIF ZILANI** - Co-Founder & Backend Developer  
- 🌐 [GitHub](https://github.com/AFIF-ZILANI)
- 📘 [Facebook](https://facebook.com/AFIF.ZILANI00)
- 📷 [Instagram](https://instagram.com/afif.zilani)
- 🐦 [Twitter](https://x.com/afif_zilani)
- 💼 [LinkedIn](https://www.linkedin.com/in/afifzilani)
- 🌍 [Website](https://afifzilani.vercel.app)
- ⭐ Specializes in Backend Web Development

## 🛠️ Services We Offer

- **Custom Web Development**: Responsive and scalable web applications
- **E-commerce Solutions**: Robust online selling platforms
- **Landing Pages**: High-converting marketing pages
- **SEO Optimization**: Improved search engine visibility

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to ZeroD. All rights reserved.

## 📞 Contact

**ZeroD** - Transforming Digital Ideas into Reality

- 📧 Email: [Contact through our website](http://localhost:3000#contact)
- 🌐 Website: [Visit our portfolio](http://localhost:3000)
- 📍 Location: Naogaon, Dhaka, Bangladesh

---

<div align="center">
  <p><strong>Founded on March 5, 2024 | Still Growing Strong 💪</strong></p>
  <p><em>"We are specializing in cutting-edge solutions for businesses. We make technology work for you."</em></p>
</div>
