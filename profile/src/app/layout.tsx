import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StyledComponentsRegistry } from '@/03-styles/styled-components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lee-Dong-Wook',
  description: '저를 소개합니다.',
  keywords: 'Resume Page',
  publisher: '이동욱',
  creator: '이동욱',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
