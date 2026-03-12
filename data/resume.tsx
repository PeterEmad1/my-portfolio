import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Peter Emad",
  initials: "PE",
  url: "https://peteremad.vercel.app",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/cairo",
  description:
    "Software developer focused on modern web apps, AI projects, and interactive software.",
  summary:
    "I am a software developer passionate about building modern web applications, AI-powered tools, and creative software solutions. I enjoy working with technologies like React, Next.js, TypeScript, and Python while exploring areas like computer vision, machine learning, and interactive user experiences.",

  avatarUrl: "/face.jpeg",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "OpenCV",
    "MediaPipe",
    "Unity",
    "TailwindCSS",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "peteremad132oo5@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PeterEmad1",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/peter-emad-7375582b7/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:peteremad132oo5@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "Hand Gesture Media Controller",
      href: "https://github.com/PeterEmad1",
      dates: "2025",
      active: true,
      description:
        "A computer vision project that allows users to control media playback and system volume using hand gestures through a webcam using OpenCV and MediaPipe.",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      links: [
        {
          type: "Source",
          href: "https://github.com/PeterEmad1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },

    {
      title: "AI Explainability Project",
      href: "https://github.com/PeterEmad1",
      dates: "2025",
      active: true,
      description:
        "A machine learning project that analyzes product ratings and provides explainable predictions using SHAP and LIME with a RandomForest classifier.",
      technologies: [
        "Python",
        "Machine Learning",
        "SHAP",
        "LIME",
        "Scikit-Learn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PeterEmad1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },

    {
      title: "Advanced Tic-Tac-Toe AI",
      href: "https://github.com/PeterEmad1",
      dates: "2025",
      active: true,
      description:
        "A terminal-based Tic-Tac-Toe game in C++ featuring advanced AI using Minimax with Alpha-Beta pruning, score tracking, and enhanced terminal UI.",
      technologies: ["C++", "Algorithms", "Game AI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/PeterEmad1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },

    {
      title: "Portfolio Website",
      href: "https://peteremad.vercel.app",
      dates: "2026",
      active: true,
      description:
        "A modern developer portfolio built with Next.js, featuring animated UI components, interactive sections, blog system, and responsive design.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://peteremad.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PeterEmad1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
  ],
} as const;
