import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Provider from "@/components/ui/provider";
import StoreProvider from "@/redux/StoreProvider";
import Header from "@/components/Home/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#ec4899"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />

        <Provider>
          <StoreProvider>
            <Header />
          </StoreProvider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
