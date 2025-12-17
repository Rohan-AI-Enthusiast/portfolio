import type { Metadata } from "next";
import "../styles/tailwind.css";

export const metadata: Metadata = {
  title: "Rohan | AI PM Portfolio",
  description: "AI Product Manager portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f6f6f6] text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
