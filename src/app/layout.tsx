import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "@/components/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "./theme";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DietGPT",
  description: "Think less, follow your diet more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={mavenPro.className}>
          <AppRouterCacheProvider>
            <CssBaseline />
            <Navbar />
            <main className="flex min-h-[90vh] md:flex-col items-center justify-center py-12 md:p-24">
              {children}
            </main>
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
