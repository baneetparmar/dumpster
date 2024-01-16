import "./globals.css";
import { Providers } from "./providers";
import Navigationbar from "@/components/navbar";
export const metadata = {
  title: "Dumpster",
  description: "build and learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navigationbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
