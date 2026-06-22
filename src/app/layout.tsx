import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Sri Vishnu Sahasranama Stotram | శ్రీ విష్ణు సహస్ర నామ స్తోత్రం",
  description: "Sri Vishnu Sahasranama Stotram with Telugu lyrics, English transliteration, and meanings in both Telugu and English. Learn and chant the 1000 names of Lord Vishnu.",
  keywords: ["Vishnu Sahasranamam", "Telugu", "Vishnu", "1000 Names", "Stotram", "Bhakti", "Sahasranama"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
