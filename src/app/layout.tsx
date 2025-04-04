import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css"
import { TaskProvider } from "./context/TaskContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Simple Task Manager App using Next.js and useContext",
};

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TaskProvider>
          {children}
        </TaskProvider>
        
      </body>

    </html>
  )
}

