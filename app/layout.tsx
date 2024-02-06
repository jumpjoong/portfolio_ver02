import SpaceCanvas from "@/components/SpaceCanvas";
import "@/style/global.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"],});

export const metadata = {
  title: "김현중의 포트폴리오",
  description: "포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SpaceCanvas />
        {children}
      </body>
    </html>
  );
}
