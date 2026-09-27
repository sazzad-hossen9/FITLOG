import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import NavBer from "./components/shared/NavBer";
import FooterPage from "./components/shared/footer/page";
import FitLogProvide from "./context/context";
import { ToastContainer } from "react-toastify";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-fit-theme font-inter">
        <FitLogProvide>
          <NavBer />
          <main className="flex-1">
            {children}
            <ToastContainer />
          </main>
          <FooterPage />
        </FitLogProvide>
      </body>
    </html>
  );
}
