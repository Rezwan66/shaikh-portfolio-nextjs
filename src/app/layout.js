import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "Shaikh Rezwan | Full Stack Developer",
  description:
    "Portfolio of Shaikh Rezwan — Backend-focused Full Stack Developer at SAP. Skilled in JavaScript, TypeScript, Python, Node.js, React, Docker, Kubernetes, and cloud-based infrastructure.",
  keywords: [
    "Shaikh Rezwan",
    "Full Stack Developer",
    "Backend Developer",
    "SAP Developer",
    "Portfolio",
    "Web Developer",
    "React",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Shaikh Rezwan" }],
  openGraph: {
    title: "Shaikh Rezwan | Full Stack Developer",
    description:
      "Backend-focused Full Stack Developer at SAP. Building scalable, data-driven applications.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
