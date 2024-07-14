"use client"

// css 적용
import "@/styles/commons/reset.css"
import "@/styles/commons/global.css"
import { Noise } from "@/styles/commons/commons";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Noise />
      </body>
    </html>
  );
}
