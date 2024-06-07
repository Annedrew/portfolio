import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/header";
import ActiveSectionContextProvider from "@/app/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ning An | Personal Portfolio",
  description:
    "Ning An is a full-stack developer with 1 years of experience and a Msc of Computer Science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} pt-28 bg-gray-50 text-gray-950`}>
        <div
          className="bg-[#facdcf]
                        absolute
                        -z-10
                        top-[-6rem]
                        left-[21rem]
                        h-[30rem] 
                        w-[35rem] 
                        rounded-full 
                        blur-[8rem] 
                        sm:w-[68.75rem]"
        />
        <div
          className="bg-[#bdb7fb] 
                        absolute 
                        -z-10
                        top-[-1rem] 
                        left-[-30rem] 
                        h-[30rem] 
                        w-[35rem] 
                        rounded-full 
                        blur-[8rem] 
                        sm:w-[68.75rem]
                        md:left-[-33rem]
                        lg:left-[-28rem]
                        xl:left-[-15rem]
                        2xl:left-[-5rem]"
        />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
