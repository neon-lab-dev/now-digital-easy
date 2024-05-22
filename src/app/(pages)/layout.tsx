import type { Metadata } from "next";

import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Now Digital Easy",
  description:
    "Stop being static! Scale your business by going digital, the easy way, with NDE. We're technology-enabled and structured for speed and efficiency to meet the ever-changing needs of today's business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
