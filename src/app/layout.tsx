import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const bodyFont = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const displayFont = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "中式快餐风味菜谱大全 - 正宗家常菜制作方法 | 美食菜谱网",
    template: "%s | 美食菜谱网",
  },
  description: "中式快餐风味菜谱大全，收录300+道正宗家常菜制作方法。包含炒菜、主食、汤品、凉拌菜等15个菜系，详细步骤图解，营养搭配指南。基于公开的菜品溯源报告整理，让您在家轻松做出餐厅级美味。免费查看所有菜谱！",
  keywords: ["中式菜谱", "家常菜谱", "家常菜做法", "炒菜菜谱", "中华料理", "快餐菜谱", "菜谱大全", "家庭烹饪", "中国菜做法", "传统菜谱", "营养家常菜", "简单易做菜谱"],
  authors: [{ name: "CookLikeHOC" }],
  creator: "CookLikeHOC",
  publisher: "CookLikeHOC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://recipe.bazinga.ink'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "中式快餐风味菜谱大全 - 正宗家常菜制作方法",
    description: "中式快餐风味菜谱大全，收录300+道正宗家常菜制作方法。包含炒菜、主食、汤品、凉拌菜等15个菜系，详细步骤图解，让您在家轻松做出餐厅级美味。",
    siteName: "美食菜谱网",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "中式快餐风味菜谱大全 - 正宗家常菜制作方法",
    description: "中式快餐风味菜谱大全，收录300+道正宗家常菜制作方法。包含炒菜、主食、汤品、凉拌菜等15个菜系。",
    site: "@CookLikeHOC",
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-screen bg-brand-cream text-brand-dark antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
