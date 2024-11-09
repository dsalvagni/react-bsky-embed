import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bluesky Embedded Post",
  description: "React Bluesky embedded post",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">{children}</body>
    </html>
  );
}
