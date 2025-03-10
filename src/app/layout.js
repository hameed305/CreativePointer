import "./globals.css";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Creative Pointer",
  description: "A web designing , logo designing and web development zone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon.svg"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body className="">
        <NextTopLoader
          color="rgb(81, 0, 255)" // Progress bar color
          startPosition={0.3} // Where the progress bar starts
          stopDelayMs={200} // Delay before the progress bar stops
          height={3} // Height of the progress bar
          showSpinner={false} // Show the loading spinner
        />
        <div
          className="font-poppins select-none scroll-smooth p-2 container w-[95%] rounded-2xl bg-white bg-opacity-30 backdrop-blur-sm my-3 mx-auto border-white border-2 border-opacity-45 border-solid dark:bg-slate-950 dark:border-opacity-10 dark:text-white
        "
        >
          <Header />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
