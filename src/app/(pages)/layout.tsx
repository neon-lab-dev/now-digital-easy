import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify
import { ReactQueryClientProvider } from "@/providers/QueryClientProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import AuthProvider from "@/providers/AuthProvider";

export const metadata: Metadata = {
  title: "Now Digital Easy",
  description:
    "Stop being static! Scale your business by going digital, the easy way, with NDE. We're technology-enabled and structured for speed and efficiency to meet the ever-changing needs of today's business.",
  icons: [
    {
      rel: "icon",
      href: "/favicon.svg",
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <ReduxProvider>
        <html lang="en">
          <body className="overflow-x-hidden">
            <AuthProvider>
              <div className="flex flex-col">
                <ToastContainer />
                <Navbar />
                <main className="">{children}</main>
                <Footer />
              </div>
            </AuthProvider>
          </body>
        </html>
      </ReduxProvider>
    </ReactQueryClientProvider>
  );
}
