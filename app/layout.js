"use client";
import styles from "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StateProvider } from "@/components/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Form</title>
      </head>
      <body>
        <StateProvider>
          <div className="container">
            <Header />
            <>{children}</>
            <Footer />
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
