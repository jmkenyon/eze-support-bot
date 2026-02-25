import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { ToastProvider } from "./providers/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Turbo | SS&C's AI Assistant",
  description: "Ask questions about EMS, get help with tasks, and make your workday easier with Turbo, SS&C's AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${inter.className}`}
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
