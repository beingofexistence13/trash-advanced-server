import { Navbar, Applebar, Bottombar, Sidebar } from "../src/components";
import "../src/ui/globals.css";
import { Providers } from "./provider";
import * as React from 'react';









export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="">
        <Providers>
          <div className="main">{children}</div>
          <Navbar />
          <Sidebar />
          <Applebar />
          <Bottombar />
        </Providers>
      </body>
    </html >
  );
}
