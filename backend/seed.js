import mongoose from "mongoose";
import dns from "dns";
import dotenv from "dotenv";
import Course from "./models/courseModel.js";

dotenv.config();
dns.setServers(['8.8.8.8', '8.8.4.4']);

const courses = [
  // ── Web Development ──────────────────────────────────────────────
  {
    title: "Full Stack Web Development Bootcamp",
    subTitle: "Master HTML, CSS, JavaScript, React & Node.js",
    description: "A comprehensive bootcamp covering everything from frontend to backend. Build real-world projects using the MERN stack.",
    category: "Web Development",
    level: "Beginner",
    price: 1499,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    isPublished: true,
  },
  {
    title: "Advanced React & Next.js",
    subTitle: "Server-side rendering, API routes & performance optimization",
    description: "Take your React skills to the next level with Next.js, SSR, SSG, React Query, and modern deployment strategies.",
    category: "Web Development",
    level: "Advanced",
    price: 1999,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    isPublished: true,
  },
  {
    title: "CSS Mastery: From Basics to Glassmorphism",
    subTitle: "Animations, Flexbox, Grid & modern design trends",
    description: "Learn CSS deeply — from the box model and flexbox to advanced animations, glassmorphism, and responsive design.",
    category: "Web Development",
    level: "Intermediate",
    price: 799,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    isPublished: true,
  },

  // ── App Development ───────────────────────────────────────────────
  {
    title: "React Native: Build iOS & Android Apps",
    subTitle: "Cross-platform mobile development from scratch",
    description: "Learn to build production-ready mobile apps using React Native. Cover navigation, state management, and native APIs.",
    category: "App Development",
    level: "Intermediate",
    price: 1799,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    isPublished: true,
  },
  {
    title: "Flutter & Dart Complete Course",
    subTitle: "One codebase for Android, iOS & Web",
    description: "Build beautiful cross-platform apps with Flutter. Covers widgets, state management (Bloc/Provider), Firebase integration.",
    category: "App Development",
    level: "Beginner",
    price: 1599,
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    isPublished: true,
  },

  // ── AI / ML ───────────────────────────────────────────────────────
  {
    title: "Machine Learning A-Z with Python",
    subTitle: "Supervised, Unsupervised & Reinforcement Learning",
    description: "Master Machine Learning algorithms from regression to neural networks. Includes hands-on projects with scikit-learn and TensorFlow.",
    category: "AI/ML",
    level: "Intermediate",
    price: 2199,
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800",
    isPublished: true,
  },
  {
    title: "Deep Learning & Neural Networks",
    subTitle: "CNNs, RNNs, Transformers & LLMs explained",
    description: "Go deep into neural network architectures. Build CNNs for images, RNNs for sequences, and fine-tune transformer models.",
    category: "AI/ML",
    level: "Advanced",
    price: 2499,
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
    isPublished: true,
  },

  // ── AI Tools ──────────────────────────────────────────────────────
  {
    title: "Mastering ChatGPT & Prompt Engineering",
    subTitle: "Get 10x productivity with AI tools",
    description: "Learn advanced prompt engineering techniques, build AI workflows, and integrate ChatGPT into real business use-cases.",
    category: "AI Tools",
    level: "Beginner",
    price: 699,
    thumbnail: "https://images.unsplash.com/photo-1684369175809-f9642140a1bd?w=800",
    isPublished: true,
  },
  {
    title: "AI Tools for Developers: Copilot, Cursor & More",
    subTitle: "Supercharge your coding with AI assistants",
    description: "A practical guide to using GitHub Copilot, Cursor AI, and other AI-powered developer tools to write code faster.",
    category: "AI Tools",
    level: "Intermediate",
    price: 999,
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    isPublished: true,
  },

  // ── Data Science ──────────────────────────────────────────────────
  {
    title: "Data Science with Python: Complete Bootcamp",
    subTitle: "NumPy, Pandas, Matplotlib & more",
    description: "Master the core Python data science stack. Learn to clean, visualize, and model real-world datasets step by step.",
    category: "Data Science",
    level: "Beginner",
    price: 1299,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    isPublished: true,
  },
  {
    title: "Statistics for Data Science",
    subTitle: "Probability, hypothesis testing & regression",
    description: "Build a solid statistical foundation for data science. Covers probability distributions, A/B testing, and statistical modelling.",
    category: "Data Science",
    level: "Intermediate",
    price: 899,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    isPublished: true,
  },

  // ── Data Analytics ────────────────────────────────────────────────
  {
    title: "Business Analytics with Excel & Power BI",
    subTitle: "Turn raw data into actionable dashboards",
    description: "Learn data analytics using Excel and Power BI. Build interactive dashboards, KPI reports, and data-driven business decisions.",
    category: "Data Analytics",
    level: "Beginner",
    price: 999,
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    isPublished: true,
  },
  {
    title: "SQL for Data Analysts",
    subTitle: "From basics to advanced window functions",
    description: "Master SQL for data analysis. Covers SELECT, JOINs, subqueries, CTEs, window functions, and real-world analytics scenarios.",
    category: "Data Analytics",
    level: "Intermediate",
    price: 1099,
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800",
    isPublished: true,
  },

  // ── Ethical Hacking ───────────────────────────────────────────────
  {
    title: "Ethical Hacking & Penetration Testing",
    subTitle: "CEH prep: recon, exploitation & reporting",
    description: "Become a certified ethical hacker. Learn reconnaissance, vulnerability scanning, exploitation, and writing penetration test reports.",
    category: "Ethical Hacking",
    level: "Intermediate",
    price: 1899,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    isPublished: true,
  },
  {
    title: "Web Application Security & Bug Bounty",
    subTitle: "OWASP Top 10, XSS, SQLi & more",
    description: "Learn to find and exploit web vulnerabilities. Covers OWASP Top 10, Burp Suite, XSS, SQL injection and bug bounty methodology.",
    category: "Ethical Hacking",
    level: "Advanced",
    price: 2099,
    thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
    isPublished: true,
  },

  // ── UI UX Designing ───────────────────────────────────────────────
  {
    title: "UI/UX Design Masterclass with Figma",
    subTitle: "Design stunning interfaces from wireframe to prototype",
    description: "Learn the complete UI/UX design process — user research, wireframing, prototyping, and handoff — using Figma.",
    category: "UI UX Designing",
    level: "Beginner",
    price: 1199,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    isPublished: true,
  },
  {
    title: "Design Systems & Component Libraries",
    subTitle: "Build scalable, consistent design systems",
    description: "Create professional design systems in Figma. Learn design tokens, component variants, auto-layout, and developer handoff.",
    category: "UI UX Designing",
    level: "Advanced",
    price: 1499,
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    isPublished: true,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ DB connected");

    await Course.deleteMany({ creator: null }); // remove only unseeded (no creator) courses
    console.log("🗑️  Cleared old seeded courses");

    const inserted = await Course.insertMany(courses);
    console.log(`🌱 Inserted ${inserted.length} courses successfully!`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

seed();
