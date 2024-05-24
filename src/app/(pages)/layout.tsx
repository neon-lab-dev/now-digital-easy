import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactQueryClientProvider } from "@/util/Providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify




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
    <ReactQueryClientProvider>
    <html lang="en">
      <body>
        <div className="flex flex-col">
        <ToastContainer />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
    </ReactQueryClientProvider>
  );
}
