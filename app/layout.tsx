import "@styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive Deal",
  description: "Find the perfect car",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="app">{children}</body>
    </html>
  );
};

export default RootLayout;
