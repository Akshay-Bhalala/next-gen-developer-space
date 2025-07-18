# Akshay Bhalala Portfolio

A modern, fast, and SEO-optimized portfolio website for Akshay Bhalala.

## Live Site

**URL:** [https://akshay-bhalala.netlify.app/](https://akshay-bhalala.netlify.app/)

---

## 🚀 Tech Stack
- [Vite](https://vitejs.dev/) (React + TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [react-router-dom](https://reactrouter.com/)
- [react-helmet-async](https://github.com/staylor/react-helmet-async) (SEO)
- [Netlify](https://www.netlify.com/) (Hosting)

---

## 🛠️ Local Development

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

## 🌐 Deployment (Netlify)

1. **Build the project:**
   ```sh
   npm run build
   ```
2. **Deploy the `dist/` folder to Netlify:**
   - Drag & drop the `dist/` folder in the Netlify UI, or
   - Connect your GitHub repo and let Netlify build/deploy automatically.
3. **Enable SPA routing:**
   - Make sure you have a `public/_redirects` file with this content:
     ```
     /*    /index.html   200
     ```
   - This ensures all routes are handled by React Router and your custom 404 page.

---

## 🌍 Custom Domain

- You can connect your own domain in Netlify’s site settings.
- [Netlify Docs: Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

---

## ✨ Features
- Blazing fast load times (Vite + CDN + image preloading)
- Fully responsive and mobile-friendly
- SEO optimized (meta tags, Open Graph, Twitter Cards, robots.txt, sitemap)
- Modern UI with shadcn/ui and Tailwind CSS
- Custom 404 page
- Easy to update and extend

---

## 👤 Author
**Akshay Bhalala**
- [LinkedIn](https://www.linkedin.com/in/akshay-bhalala-ak2409/)
- [GitHub](https://github.com/Akshay-Bhalala)
- [Portfolio](https://akshay-bhalala.netlify.app/)

---

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
