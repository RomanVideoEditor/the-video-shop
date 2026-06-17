import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Video Shop",
  description: "סטודיו בוטיק להפקות וידאו ו-AI לחברות המובילות במשק",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
