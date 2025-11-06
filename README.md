# Child Rights Foundation (CRF) Website

A full-featured, static NGO website for Child Rights Foundation built with modern web technologies.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS.js** - Scroll animations
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing

## 🎨 Brand System

- **Primary Color:** Gold `#D4AF37`
- **Secondary Color:** Deep Blue `#003366`
- **Accent:** White `#FFFFFF` / Soft Gray `#F8F8F8`
- **Text Color:** Charcoal `#222222`
- **Typography:** Poppins (headings), Lato/Open Sans (body)

## 📁 Project Structure

```
crf-website/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MissionSection.tsx
│   │   ├── ProgramsGrid.tsx
│   │   ├── ImpactStats.tsx
│   │   └── PartnersCarousel.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── AishaCares.tsx
│   │   ├── ProjectsImpact.tsx
│   │   ├── GetInvolved.tsx
│   │   ├── Donate.tsx
│   │   ├── Gallery.tsx
│   │   ├── News.tsx
│   │   ├── Contact.tsx
│   │   └── Legal.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── style.css       # Global styles and Tailwind imports
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📄 Pages

- **Home** - Hero section, mission overview, programs snapshot, impact stats, partners
- **About Us** - CRF history, vision, objectives, core values, leadership
- **Programs** - Detailed program descriptions
- **Aisha Cares Initiative** - Special initiative page with testimonials
- **Projects & Impact** - Success stories, partnerships, timeline
- **Get Involved** - Volunteer, partnership, and event participation forms
- **Donate** - Donation tiers and payment options
- **Gallery** - Photo gallery with lightbox
- **News & Updates** - Latest news and blog posts
- **Contact** - Contact form and location map
- **Legal** - Privacy policy, terms & conditions, cookie policy

## 🔧 Configuration

### Formspree Integration

To enable contact forms, update the Formspree form IDs in:
- `src/pages/Contact.tsx`
- `src/pages/GetInvolved.tsx`

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Payment Integration

Update the donation page (`src/pages/Donate.tsx`) with your Paystack or Flutterwave integration.

### Google Maps

Update the Google Maps embed URL in `src/pages/Contact.tsx` with your actual location coordinates.

## 🚀 Deployment

### Hostinger Cloud Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your Hostinger `public_html` directory.

3. Configure your domain to point to the `public_html` directory.

4. Enable SSL certificate through Hostinger's control panel.

### Other Static Hosting

The built site in the `dist` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## 📝 Features

- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Scroll animations with AOS
- ✅ SEO-friendly structure
- ✅ Accessible navigation
- ✅ Contact forms (Formspree ready)
- ✅ Image gallery with lightbox
- ✅ Modern, elegant NGO design
- ✅ Gold/Blue brand colors
- ✅ Fast loading and optimized

## 📞 Contact

For questions or support, contact:
- Email: contact@childrightsfoundation.com
- Phone: +234 707 999 3916

## 📄 License

All rights reserved. Child Rights Foundation © 2024

