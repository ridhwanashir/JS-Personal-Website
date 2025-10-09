import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Ridhwan Nashir - Software Engineer & Solution Architect",
    template: "%s | Ridhwan Nashir",
  },
  icons: {
    icon: '/ridhwan-logo.png', // or '/favicon.png'
  },
  description: "Experienced Software Engineer and Solution Architect specializing in AI/ML, data engineering, and cloud solutions. AWS certified with expertise in machine learning and scalable software architecture.",
  keywords: [
    "software engineer",
    "solution architect", 
    "AI engineer",
    "data engineer",
    "machine learning",
    "AWS",
    "cloud solutions",
    "artificial intelligence",
    "Ridhwan Nashir"
  ],
  authors: [{ name: "Ridhwan Nashir" }],
  creator: "Ridhwan Nashir",
  metadataBase: new URL("https://ridhwanashir.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ridhwanashir.my.id",
    title: "Ridhwan Nashir - Software Engineer & Solution Architect",
    description: "Experienced Software Engineer and Solution Architect specializing in AI/ML, data engineering, and cloud solutions.",
    siteName: "Ridhwan Nashir Portfolio",
    images: [
      {
        url: "/ridhwan-logo.png",
        width: 1200,
        height: 630,
        alt: "Ridhwan Nashir - Software Engineer & Solution Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridhwan Nashir - Software Engineer & Solution Architect",
    description: "Experienced Software Engineer and Solution Architect specializing in AI/ML, data engineering, and cloud solutions.",
    images: ["/ridhwan-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
