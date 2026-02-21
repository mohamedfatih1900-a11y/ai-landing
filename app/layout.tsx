import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/lib/LangagueContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}