import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import StoreProvider from "@/redux/StoreProvider"; // Redux Provider Import kiya

import Provider from "@/components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
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

          {/* Pure children ko StoreProvider ke andar wrap kar diya */}
          <StoreProvider>{children}</StoreProvider>
        </body>
      </Provider>
    </html>
  );
}
