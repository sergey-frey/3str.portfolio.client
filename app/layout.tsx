import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Providers } from "@/widgets/providers/providers";
import clsx from "clsx";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "3str.portfolio",
  description: "Сайт портфолио Тенькаева Сергея (3str)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.className,
          "flex flex-col",
          "bg-neutral-900 text-neutral-100 font-[14px] md:font-[16px]",
        )}
      >
        <Header />
        <Providers>
          <main className="flex-1">{children}</main>
          <Footer />
          <div id="modal-portal"></div>
        </Providers>
      </body>
    </html>
  );
}
