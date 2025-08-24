import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { aclonica } from "@/components/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
    title: "ZeroD - Portfolio",
    description:
        "Welcome to ZeroD, your go-to destination for cutting-edge web development and digital solutions. Explore our portfolio and discover how we can transform your ideas into reality.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${aclonica.className} antialiased `}>
                <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
