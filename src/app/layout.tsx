import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}