import React, { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow My Therapy - Dr. Serena Blake",
  description: "Therapist website built with Next.js 14 and Tailwind CSS",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  const {children}=props;
  return (
    <html lang="en">
      <body className="bg-blue-50 text-gray-900">{children}</body>
    </html>
  );
}
