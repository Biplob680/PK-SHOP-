import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PK SHOP | আপনার অনলাইন শপ",
  description: "PK SHOP — বাংলাদেশের জন্য বহু-বিভাগের অনলাইন শপ।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
