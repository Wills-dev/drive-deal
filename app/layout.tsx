import { Metadata } from "next";

import { Footer, Navbar } from "@components";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Drive Deal",
  description: "Find the perfect car",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
