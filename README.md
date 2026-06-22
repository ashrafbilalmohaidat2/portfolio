# Ashraf Mheidat — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS**.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
```

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx          # Also exports SectionLabel used by other components
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Brand.jsx
│   ├── Certifications.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Things to update before deploying

1. **Profile photo** — replace the placeholder in `Hero.jsx` with `<img src="/photo.jpg" ... />`  
   and put your photo in the `public/` folder

2. **EmailJS** — open `src/components/Contact.jsx` and replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`
   
   Get these from [emailjs.com](https://emailjs.com) (free account)

3. **GitHub repo links** — update any `YOUR_USERNAME` placeholders in `Projects.jsx`

4. **Certificate links** — replace `href="#"` in `Certifications.jsx` with real verification URLs

5. **Brand platform links** — replace `href="#"` in `Brand.jsx` with real Instagram/YouTube URLs

6. **CV download** — put your CV file in `public/` and update the `href` in `Hero.jsx`

## Deployment

Works out of the box on **Vercel**, **Netlify**, or **GitHub Pages**.

For Vercel:
```bash
npm i -g vercel
vercel
```
# portfolio
