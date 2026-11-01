import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Sultan Fahreza | Geological Engineer",
  description: "Geological Engineering graduate focused on petrophysics, reservoir evaluation, and subsurface interpretation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
