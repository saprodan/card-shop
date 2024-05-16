import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/app/store-provider';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}