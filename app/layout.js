import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import { Analytics } from "@vercel/analytics/react"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: {
    template: "%s | The World Oasis",
    default: "Welcome / The World Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 flex flex-col relative  min-h-screen ${josefin.className} antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full ">
            <ReservationProvider>{children}
            <Analytics />
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
