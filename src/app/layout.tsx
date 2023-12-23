import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { Viewport } from "next";
import { Navi } from "@/components/Navi";
import toast, { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className=" flex flex-col h-full w-full">

            {/* <Navi /> */}
            {/* <Navbar /> */}
            <main className="container max-w-full h-full flex-grow relative">
              <video autoPlay loop muted playsInline className="absolute md:hidden h-full w-full z-0 object-cover object-center overflow-hidden">
                <source src={'/video/Neon.mp4'} type="video/mp4" />
              </video>
              <video autoPlay loop muted playsInline className="hidden md:fixed md:block h-full w-full z-0 object-cover object-center overflow-hidden">
                <source src={'/video/sunset.mp4'} type="video/mp4" />
              </video>
              <div className="z-5">
                {children}
              </div>
              {/* <Footer /> */}
            </main>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
