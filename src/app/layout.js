import { IBM_Plex_Sans, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { Toaster } from 'sonner';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import QueryProvider from "../providers/QueryProvider";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Brain Capital Asset GmbH | Finanzstrategien mit Klarheit",
  description: "Brain Capital Asset entwickelt strukturierte Finanzstrategien für Vermögensverwaltung, Kapitalmarkt, IPO sowie Fest- und Tagesgeld.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body 
        className={`${ibmPlexSans.variable} ${robotoCondensed.variable} antialiased`}
        suppressHydrationWarning
      >
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <QueryProvider>
            <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 0 }}>
              {children}
            </DatesProvider>
          </QueryProvider>
          <Toaster position="bottom-right" />
        </MantineProvider>
      </body>
    </html>
  );
}
